import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { JwtPaylod } from '../types';
import { UsersService } from 'src/modules/users/services/users.service';
import { User } from 'src/modules/users/types';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UsersService,
    conf: ConfigService,
  ) {
    // calling Base Constructor
    super({
      secretOrKey: conf.get<string>('JWT_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          if (req && req.cookies) {
            return req.cookies['token'];
          }
        },
      ]),
    });
  }

  // Override Validation fn
  async validate(payload: JwtPaylod & { iat: number }) {
    // Extract email from JWT payload
    const { email, iat } = payload;

    // Get user based on it's email
    const user = (await this.userService.getByEmail(email))?.Items[0] as User;

    if (user && user.passwordChangedAt) {
      // Check if token was issued before password change
      const changedTimestamp =
        new Date(user.passwordChangedAt).getTime() / 1000;
      if (iat < changedTimestamp) {
        throw new UnauthorizedException();
      }
    }

    // check if user exists throw UnAuthorized if it not exists
    if (!user) throw new UnauthorizedException();

    // Add user To request object
    return user;
  }
}
