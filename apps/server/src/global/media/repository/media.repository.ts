import { GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { DynamoDBService } from 'src/global/databases/services/dynamodb.service';
import { MediaModel } from '../models';
import { MediaSchema } from '../schema/media.schema';

@Injectable()
export class MediaRepository {
  private readonly tableName: string = 'Media';
  constructor(private readonly db: DynamoDBService) {
    this.db.instantiate(MediaSchema(this.tableName));
  }

  async getMediaById(id: string) {
    const params: GetCommandInput = {
      TableName: this.tableName,
      Key: {
        PK: 'MEDIA',
        SK: id,
      },
    };

    return this.db.get(params);
  }

  async putMedia(media: MediaModel) {
    const params = {
      TableName: this.tableName,
      Item: {
        PK: 'MEDIA',
        SK: media.mediaId,
        mediaMimType: media.mediaMimType,
        mediaUrl: media.mediaUrl,
        size: media.size,
        name: media.name,
        owner: media.owner,
        createdAt: media.createdAt.toISOString(),
        updatedAt: media.updatedAt.toISOString(),
      },
    };

    return this.db.put(params);
  }

  async deleteMedia(id: string) {
    const params = {
      TableName: this.tableName,
      Key: {
        PK: 'MEDIA',
        SK: id,
      },
    };

    return this.db.delete(params);
  }
}
