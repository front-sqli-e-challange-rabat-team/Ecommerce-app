import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { MediaService } from '../services/media.service';

@Injectable()
export class MediaFound implements CanActivate {
  constructor(private readonly media: MediaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    const mediakey = req.params.key;

    const media = await this.media.getMediaById(mediakey);

    if (!media) {
      throw new NotFoundException('Media not found');
    }

    req['media'] = media;
    return true;
  }
}
