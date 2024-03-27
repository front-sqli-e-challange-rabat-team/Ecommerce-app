import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreateTableCommand,
  CreateTableCommandInput,
} from '@aws-sdk/client-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DeleteCommandInput,
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  PutCommand,
  PutCommandInput,
  ScanCommandInput,
  UpdateCommand,
  UpdateCommandInput,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';

@Injectable()
export class DynamoDBService {
  private isProduction: boolean;
  private tableSuffix: string;
  private docClient: DynamoDBDocumentClient;
  private dbClient: DynamoDBClient;

  constructor(private readonly conf: ConfigService) {
    const ENV = conf.get('NODE_ENV');

    this.isProduction = ENV === 'production';

    this.tableSuffix = this.isProduction
      ? <const>'Production'
      : ENV === 'developement'
        ? <const>'Staging'
        : <const>'Testing';

    const credentials = {
      accessKeyId: 'local',
      secretAccessKey: 'local',
      sessionToken: 'local',
    };

    if (this.isProduction) {
      this.dbClient = new DynamoDBClient({ region: 'eu-west-1' });
    } else {
      this.dbClient = new DynamoDBClient({
        region: 'us-east-1',
        endpoint: 'http://localhost:8000',
        credentials: credentials,
      });
    }

    const marshallOptions = {
      // Whether to automatically convert empty strings, blobs, and sets to `null`.
      convertEmptyValues: false, // false, by default.
      // Whether to remove undefined values while marshalling.
      removeUndefinedValues: false, // false, by default.
      // Whether to convert typeof object to map attribute.
      convertClassInstanceToMap: false, // false, by default.
    };

    const unmarshallOptions = {
      // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
      wrapNumbers: false, // false, by default.
    };

    const translateConfig = { marshallOptions, unmarshallOptions };

    this.docClient = DynamoDBDocumentClient.from(
      this.dbClient,
      translateConfig,
    );
  }

  public async scan(params: ScanCommandInput) {
    const user = await this.docClient.send(
      new ScanCommand(<ScanCommandInput>this.postfixParams(params)),
    );
    return user;
  }

  public async instantiate(params: CreateTableCommandInput) {
    try {
      return await this.dbClient.send(
        new CreateTableCommand(
          <CreateTableCommandInput>this.postfixParams(params),
        ),
      );
    } catch (error) {
      console.log(`${error.message}: ${params.TableName}`);
    }
  }

  public async put(params: PutCommandInput) {
    return await this.docClient.send(
      new PutCommand(<PutCommandInput>this.postfixParams(params)),
    );
  }

  public async delete(params: DeleteCommandInput) {
    return await this.docClient.send(
      new DeleteCommand(<DeleteCommandInput>this.postfixParams(params)),
    );
  }

  public async get(params: GetCommandInput) {
    return await this.docClient.send(
      new GetCommand(<GetCommandInput>this.postfixParams(params)),
    );
  }

  public async update(params: UpdateCommandInput) {
    return await this.docClient.send(
      new UpdateCommand(<UpdateCommandInput>this.postfixParams(params)),
    );
  }

  private postfixParams(
    params:
      | PutCommandInput
      | DeleteCommandInput
      | GetCommandInput
      | ScanCommandInput
      | UpdateCommandInput,
  ) {
    return <typeof params>{
      ...params,
      TableName: this.getTable(params.TableName),
      ...('Key' in params
        ? { Key: { ...params.Key, PK: this.getPrimaryKey(params.Key.PK) } }
        : {}),
      ...('Item' in params
        ? { Item: { ...params.Item, PK: this.getPrimaryKey(params.Item.PK) } }
        : {}),
    };
  }

  private getTable(name: string) {
    return `${name}_${this.tableSuffix}`;
  }

  private getPrimaryKey(name: string) {
    return `${name.toUpperCase()}_${this.tableSuffix.toUpperCase()}`;
  }
}
