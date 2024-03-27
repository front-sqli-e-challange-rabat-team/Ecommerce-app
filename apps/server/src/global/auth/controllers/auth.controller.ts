import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthUserDto } from '../dto/auth-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../decorators/user.decorator';
import { User } from 'src/modules/users/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthUserDto, @Res() res: Response) {
    const data = await this.authService.signIn(loginDto);
    res.cookie('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.send(data.user);
  }

  @Post('register')
  async register(
    @Body() registerDto: CreateUserDto,
    @Query('referal') referalCode: string,
    @Res() res: Response,
  ) {
    const fn = referalCode ? 'signUpWithRef' : 'signUp';

    const data = await this.authService[fn](registerDto, referalCode);

    res.cookie('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.send(data.user);
  }

  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string, @Req() req: Request) {
    return this.authService.forgotPassword(email, req.hostname, req.protocol);
  }

  @Post('reset-password/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    if (!token || !password)
      throw new BadRequestException('Invalid Token or Password');
    const data = await this.authService.resetPassword(token, password);
    res.cookie('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.send(data.user);
  }

  @UseGuards(AuthGuard())
  @Patch('change-password')
  async changePassword(
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    if (!oldPassword || !newPassword)
      throw new BadRequestException(
        'Old Password and New Password are required',
      );
    const data = await this.authService.updatePassword(
      { oldPassword, newPassword },
      user,
    );
    res.clearCookie('token');
    res.cookie('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.end();
  }

  @UseGuards(AuthGuard())
  @Patch('update-profile')
  async updateProfile(
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @GetUser() user: User,
  ) {
    if (!email && !phoneNumber)
      throw new BadRequestException('Email or Phone Number is required');
    return this.authService.updateProfile(email, phoneNumber, user);
  }

  @UseGuards(AuthGuard())
  @Patch('send-mail-confirmation')
  async sendMailConfirmation(@GetUser() user: User) {
    return this.authService.sendConfirmationEmail(user.email);
  }

  @UseGuards(AuthGuard())
  @Patch('confirm-email/:code')
  async confirmEmail(@Param('code') code: string, @GetUser() user: User) {
    return this.authService.validateMail(user.email, code);
  }
}
