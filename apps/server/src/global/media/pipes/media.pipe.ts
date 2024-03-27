import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MediaConfig, MediaFile } from '../types';

const isArrayOfFiles = (value: any) =>
  value && Array.isArray(value) && value.length && value[0].buffer;

const isFile = (value: any) => value && value.buffer;

const isFileOrArrayOfFiles = (value: any) =>
  isFile(value) || isArrayOfFiles(value);

const isObjectOfFilesAndArrayOfFiles = (value: any) =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.values(value).every(isFileOrArrayOfFiles);

const isFileOrArrayOfFilesOrObjectOfFilesAndArrayOfFiles = (value: any) =>
  isFile(value) ||
  isArrayOfFiles(value) ||
  isObjectOfFilesAndArrayOfFiles(value);

@Injectable()
export class FileValidatorPipe implements PipeTransform {
  private readonly mimetypes: string[] = [];
  private readonly files: Map<string, number> = new Map<string, number>();
  public constructor(private readonly conf: ConfigService) {
    const files = this.conf.get<MediaConfig>('MediaConfig')?.FILES;
    this.mimetypes = files && [...files?.keys()];
    this.files = files;
  }
  transform(value: any) {
    if (!isFileOrArrayOfFilesOrObjectOfFilesAndArrayOfFiles(value))
      return value;
    if (isFile(value)) {
      return this.transferFile(value);
    }
    if (isArrayOfFiles(value)) {
      return this.transferFiles(value);
    }
    if (isObjectOfFilesAndArrayOfFiles(value)) {
      return this.transferObjectOfFilesAndArrayOfFiles(value);
    }
  }

  private transferObjectOfFilesAndArrayOfFiles(value: any) {
    const files = {};
    Object.entries(value).forEach(([key, file]) => {
      if (isFile(file)) {
        files[key] = this.transferFile(<Express.Multer.File>file);
      }
      if (isArrayOfFiles(file)) {
        files[key] = this.transferFiles(<Express.Multer.File[]>file);
      }
    });
    return files;
  }

  private transferFile(file: Express.Multer.File) {
    if (!this.mimetypes.includes(file.mimetype)) {
      throw new BadRequestException(`file type is not supported`);
    }
    if (this.files.get(file.mimetype) < file.size) {
      throw new BadRequestException(`file size is greater than ${'dummy'}`);
    }

    const parts = file.mimetype.split('/');

    return <MediaFile>{ ...file, ext: parts[1], filetype: parts[0] };
  }

  private transferFiles(files: Express.Multer.File[]) {
    return files.map((file) => this.transferFile(file));
  }
}
