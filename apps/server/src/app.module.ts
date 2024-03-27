import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema, validationOptions } from './config/app.validation';
import appConfig from './config/app.config';
import { MediaModule } from './global/media/media.module';
import { AbilityModule } from './global/ability/ability.module';
import { AuthModule } from './global/auth/auth.module';
import { MailModule } from './global/mail/mail.module';
import { DatabasesModule } from './global/databases/databases.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [async () => appConfig(process.env.NODE_ENV || 'development')],
      envFilePath: ['.env', '.env.development', '.env.testing'],
      expandVariables: true,
      validationSchema,
      validationOptions,
    }),
    DatabasesModule,
    MediaModule,
    AbilityModule,
    AuthModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
