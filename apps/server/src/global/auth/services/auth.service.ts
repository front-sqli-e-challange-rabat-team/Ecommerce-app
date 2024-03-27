import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/services/users.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserModel } from 'src/modules/users/models/users.model';
import { User } from 'src/modules/users/types';
import { AuthUserDto } from '../dto/auth-user.dto';
import { MailerService } from 'src/global/mail/services/mail.service';

import * as rs from 'randomstring';

@Injectable()
export class AuthService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly conf: ConfigService,
    private readonly mailerService: MailerService,
  ) {}
  // start SignUp Service
  async signUp(userDto: CreateUserDto) {
    // extract user infos from object
    const { email, password, firstName, lastName, phoneNumber } = userDto;
    // hash user password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user into db using UserRepository
    const user = new UserModel(
      firstName,
      lastName,
      email,
      hashedPassword,
      phoneNumber,
      'user',
    );
    await this.usersService.create(user);
    await this.sendConfirmationEmail(email);

    // Sign Jwt Token
    const token = this.generateJwtToken(user); // TODO: FIX THIS

    // return saved user and he's Generated token
    return { token, user }; // TODO: FIX THIS
  }

  // start SignUp Service
  async signUpWithRef(userDto: CreateUserDto, ref: string) {
    // check if ref exists
    const referrerUser = (await this.usersService.getByReferalCode(ref))
      ?.Items[0] as unknown as User;

    // Save user into db using UserRepository

    if (!referrerUser) throw new NotFoundException();

    // TODO: CLEAN THIS FN
    // extract user infos from object
    const { firstName, lastName, email, password } = userDto;

    // hash user password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create referral
    const user = new UserModel(
      firstName,
      lastName,
      email,
      hashedPassword,
      'user',
      referrerUser.referalCode,
    );

    await this.usersService.create(user);

    await this.usersService.update({
      SK: referrerUser.SK,
      credits: referrerUser.credits + 30,
    });
    await this.sendConfirmationEmail(email);

    // Sign Jwt Token
    const token = this.generateJwtToken(user); // TODO: FIX THIS

    // return saved user and he's Generated token
    return { token, user }; // TODO: FIX THIS
  }
  // start SignIn Service
  async signIn(credentials: AuthUserDto) {
    // get user by email
    const user = (await this.usersService.getByEmail(credentials.email))
      ?.Items[0] as unknown as User;

    // check if user exists and password is matched
    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      // throw UnAuthorized If email or pass are invalids
      throw new UnauthorizedException('email or password are not valid.');
    }

    // Sign Jwt Token
    const token = this.generateJwtToken(user);

    // return Generated Token
    return { token, user };
  }
  // start forgot password Service
  async forgotPassword(email: string, host: string, protocol: string) {
    // Get user by Email
    const user = (await this.usersService.getByEmail(email))
      ?.Items[0] as unknown as User;

    // Check if User exists in db
    if (!user) {
      // Throw NotFound If Not Exists
      throw new NotFoundException('no user found with email.');
    }

    // generate random hex String as a reset Token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // encrypt reset token with sha256
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // save Hashed Reset token and he's expire date to the user Object data
    await this.usersService.update({
      passwordResetToken: hashedToken,
      passwordResetTokenExpireDate: new Date(
        Date.now() +
          this.conf.get<number>('FORGET_PASSWORD_EXPIRES_DATE') * (60 * 1000),
      ).toISOString(),
      SK: user.SK,
    });

    // generate Rest password URL
    const URL = `${protocol}://${'localhost:3000'}/reset-password/${resetToken}`;

    // Return mail sending promise
    return this.mailerService.sendEmail({
      from: this.conf.get<string>('MAILER_FROM_HEADER'),
      to: email,
      subject: this.conf.get<string>('MAILER_SUBJECT_HEADER'),
      text: URL,
    });
  }
  async resetPassword(resetToken: string, password: string) {
    // encrypt the token provided
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // get User Based On reset token
    const user = (await this.usersService.getByResetToken(hashedToken))
      ?.Items[0] as unknown as User;

    // Check if Token Is Valid
    if (!user) {
      // Throw Bad Request If Token is not valid
      throw new BadRequestException('Token is invalid or expired.');
    }

    // Hash provided password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save new password and delete reset Token and he's Metadata
    await this.usersService.update({
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetTokenExpireDate: null,
      passwordChangedAt: new Date(Date.now() - 1000).toISOString(),
      SK: user.SK,
    });

    // Sign JWt Token
    const token = this.generateJwtToken(user);

    // return generated token
    return { token, user };
  }

  async validateMail(email: string, code: string) {
    // get user by email
    const user = (await this.usersService.getByEmail(email))
      ?.Items[0] as unknown as User;

    // check if user exists
    if (!user) throw new NotFoundException('no user found with email.');

    // check if code is valid
    if (!(await bcrypt.compare(code, user.emailConfirmationCode))) {
      throw new BadRequestException('code mismatched');
    }

    // update user email confirmation status
    await this.usersService.update({
      emailConfirmed: true,
      emailConfirmationCode: null,
      SK: user.SK,
    });

    // Sign JWt Token
    const token = this.generateJwtToken(user);

    // return generated token
    return { token, user };
  }

  async sendConfirmationEmail(email: string) {
    // get user by email
    const user = (await this.usersService.getByEmail(email))
      ?.Items[0] as unknown as User;

    // check if user exists
    if (!user) throw new NotFoundException('no user found with email.');

    const random_number = rs.generate({
      length: 6,
      charset: 'numeric',
    });

    // save Hashed Reset token and he's expire date to the user Object data
    await this.usersService.update({
      emailConfirmationCode: await bcrypt.hash(`${random_number}`, 12),
      SK: user.SK,
    });

    // Return mail sending promise
    return this.mailerService.sendEmail({
      from: this.conf.get<string>('MAILER_FROM_HEADER'),
      to: email,
      subject: this.conf.get<string>('MAILER_SUBJECT_HEADER'),
      text: `validation number code: ${random_number}`,
    });
  }

  async updatePassword({ oldPassword, newPassword }: any, user: User) {
    if (!(await bcrypt.compare(oldPassword, user.password))) {
      throw new BadRequestException('password mismatched');
    }

    const password = await bcrypt.hash(newPassword, 12);
    console.log(user.SK);
    await this.usersService.update({
      password,
      passwordChangedAt: new Date(Date.now() - 1000).toISOString(),
      SK: user.SK,
    });

    const token = this.generateJwtToken(user);

    return { token, user: user };
  }

  private generateJwtToken(user: User | UserModel) {
    // Define Token Payload
    const payload: any = {
      email: user.email,
      uid: (user as any).SK || (user as any).userId,
    };

    // Sign JWt Token
    const token = this.jwtService.sign(payload);

    return token;
  }

  async updateProfile(email: string, phoneNumber: string, user: User) {
    if (!email && !phoneNumber)
      throw new BadRequestException('Email or Phone Number is required');

    await this.usersService.update({
      email,
      phoneNumber,
      SK: user.SK,
    });

    return { user };
  }
}
