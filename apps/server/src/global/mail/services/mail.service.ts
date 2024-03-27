import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailOptionsInterface } from '../types';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;
  constructor(private readonly conf: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: conf.get<string>('MAILER_HOST'),
      port: conf.get<number>('MAILER_PORT'),
      auth: {
        user: conf.get<string>('MAILER_USERNAME'),
        pass: conf.get<string>('MAILER_PASSWORD'),
      },
    });
  }

  async sendEmail(options: MailOptionsInterface) {
    return this.transporter.sendMail(options);
  }
}
