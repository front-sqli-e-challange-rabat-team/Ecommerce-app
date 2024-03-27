import { Injectable } from '@nestjs/common';
import { AWS_S3_URL_PREFIX } from 'src/shared/constants/media';
import { MediaFile } from '../types';
import { MediaS3Service } from './s3.service';
import { MediaRepository } from '../repository/media.repository';
import { MediaModel } from '../models';

@Injectable()
export class MediaService {
  public constructor(
    private readonly s3: MediaS3Service,
    private readonly repository: MediaRepository,
  ) {}

  public async getMediaById(key: string) {
    return this.repository.getMediaById(key);
  }

  public async uploadFile(file: MediaFile, userId: string) {
    const key = `${file.filetype}-${userId}-${Date.now()}.${file.ext}`;

    await this.s3.uploadFile(file.buffer, key);
    await this.repository.putMedia(
      new MediaModel(
        file.mimetype,
        AWS_S3_URL_PREFIX + key,
        file.size,
        file.originalname,
        userId,
        key.replace(`.${file.ext}`, ''),
      ),
    );
    return key.replace(`.${file.ext}`, '');
  }

  public async deleteFile(key: string) {
    await this.repository.deleteMedia(key);
    await this.s3.deleteFile(key);
  }
}
