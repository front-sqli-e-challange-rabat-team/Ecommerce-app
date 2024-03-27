import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  password: string;
}
