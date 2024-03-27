import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FileValidatorPipe } from '../pipes/media.pipe';
import { MediaFile } from '../types';
import { MediaService } from '../services/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(FileValidatorPipe)
  async testImage(@UploadedFile() file: MediaFile) {
    try {
      await this.mediaService.uploadFile(file, 'anas-jaidi');
    } catch (error) {
      console.log(error);
    }
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  @UsePipes(FileValidatorPipe)
  async testMutipleImages(@UploadedFiles() files: MediaFile[]) {
    try {
      for (let i = 0; i < files.length; i++) {
        await this.mediaService.uploadFile(files[i], 'anas-jaidi');
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':key')
  async getImage(@Req() req: Request) {
    return req['media'];
  }

  @Delete(':key')
  async deleteImage(@Param('key') key: string) {
    try {
      await this.mediaService.deleteFile(key);
    } catch (error) {
      console.log(error);
    }
  }
}
