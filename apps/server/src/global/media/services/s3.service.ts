import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MediaS3Service {
  private s3: S3Client;
  constructor(private readonly conf: ConfigService) {
    this.s3 = new S3Client({
      region: this.conf.get('S3_BUCKET_REGION'),
      credentials: {
        accessKeyId: this.conf.get('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.conf.get('S3_SECRET_ACCESS'),
      },
    });
  }

  async uploadFile(Body: Buffer, Key: string) {
    const args = {
      Bucket: this.conf.get('S3_BUCKET_NAME'),
      Key,
      Body,
    };

    return await this.s3.send(new PutObjectCommand(args));
  }

  async deleteFile(Key: string) {
    return await this.s3.send(
      new DeleteObjectCommand({ Key, Bucket: this.conf.get('S3_BUCKET_NAME') }),
    );
  }
}
