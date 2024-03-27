import { CreateTableCommandInput } from '@aws-sdk/client-dynamodb';

export const UserSchema: (tableName: string) => CreateTableCommandInput = (
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
    { AttributeName: 'email', AttributeType: 'S' }, // Add email attribute
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 3,
    WriteCapacityUnits: 3,
  },
  GlobalSecondaryIndexes: [
    {
      IndexName: 'EmailIndex',
      KeySchema: [{ AttributeName: 'email', KeyType: 'HASH' }],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3,
      },
    },
  ],
});
