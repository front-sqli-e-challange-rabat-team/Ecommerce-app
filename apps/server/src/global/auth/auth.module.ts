import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './guards/jwt-strategy.guard';

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Passport Support Module
    JwtModule.registerAsync({
      global: true,
      useFactory: async (conf: ConfigService) => {
        return {
          secret: conf.get<string>('JWT_SECRET_KEY'),
          signOptions: { expiresIn: conf.get<string>('JWT_EXPIRES_DATE') },
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
