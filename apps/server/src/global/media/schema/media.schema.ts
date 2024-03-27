import { CreateTableCommandInput } from '@aws-sdk/client-dynamodb';

export const MediaSchema: (tableName: string) => CreateTableCommandInput = (
  tableName: string,
) => ({
  TableName: tableName,
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 3,
    WriteCapacityUnits: 3,
  },
});
