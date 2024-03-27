import { Global, Module } from '@nestjs/common';
import { MediaService } from './services/media.service';
import { MediaS3Service } from './services/s3.service';
import { MediaController } from './controllers/media.controller';
import { MediaRepository } from './repository/media.repository';

@Global()
@Module({
  imports: [],
  providers: [MediaService, MediaS3Service, MediaRepository],
  controllers: [MediaController],
  exports: [MediaService, MediaS3Service],
})
export class MediaModule {}
