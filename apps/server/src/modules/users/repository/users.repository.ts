import { Injectable } from '@nestjs/common';
import { DynamoDBService } from 'src/global/databases/services/dynamodb.service';
import { UserSchema } from '../schema/users.schema';
import { GetCommandInput, ScanCommandInput } from '@aws-sdk/lib-dynamodb';
import { UserModel } from '../models/users.model';
import { User } from '../types';

@Injectable()
export class UsersRepository {
  private readonly tableName: string = 'Users';

  constructor(private readonly db: DynamoDBService) {
    this.db.instantiate(UserSchema(this.tableName));
  }
  getById(id: string) {
    const paramas: GetCommandInput = {
      TableName: this.tableName,
      Key: {
        PK: 'USER',
        SK: id,
      },
    };
    return this.db.get(paramas);
  }

  getByResetToken(token: string) {
    const params: ScanCommandInput = {
      TableName: this.tableName,
      FilterExpression: 'passwordResetToken = :passwordResetToken',
      ExpressionAttributeValues: {
        ':passwordResetToken': token,
      },
    };
    return this.db.scan(params);
  }

  getByEmail(email: string) {
    const params: ScanCommandInput = {
      TableName: this.tableName,
      FilterExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    };
    return this.db.scan(params);
  }

  getByReferalCode(referalCode: string) {
    const params: ScanCommandInput = {
      TableName: this.tableName,
      FilterExpression: 'referalCode = :referalCode',
      ExpressionAttributeValues: {
        ':referalCode': referalCode,
      },
    };
    return this.db.scan(params);
  }

  create(user: UserModel) {
    const params = {
      TableName: this.tableName,
      Item: {
        PK: 'USER',
        SK: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        passwordChangedAt: '',
        phoneNumber: user.phoneNumber,
        referalCode: user.referalCode,
        emailConfirmed: user.emailConfirmed,
        emailConfirmationCode: user.emailConfirmationCode,
        phoneNumberConfirmed: user.phoneNumberConfirmed,
        ...(user.referedBy ? { referedBy: user.referedBy } : {}),
        credits: 0,
        passwordResetToken: '',
        passwordResetTokenExpireDate: '',
        role: user.role,
        profileImage: user.profileImage,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      },
    };
    return this.db.put(params);
  }

  update(data: Partial<User>) {
    const updateParams = {
      TableName: this.tableName,
      Key: {
        PK: 'USER',
        SK: data.SK,
      },
      UpdateExpression: 'set',
      ExpressionAttributeValues: {},
    };

    if (data.emailConfirmed) {
      updateParams.UpdateExpression += ' emailConfirmed = :emailConfirmed,';
      updateParams.ExpressionAttributeValues[':emailConfirmed'] =
        data.emailConfirmed;
    }

    if (data.emailConfirmationCode) {
      updateParams.UpdateExpression +=
        ' emailConfirmationCode = :emailConfirmationCode,';
      updateParams.ExpressionAttributeValues[':emailConfirmationCode'] =
        data.emailConfirmationCode;
    }

    if (data.phoneNumberConfirmed) {
      updateParams.UpdateExpression +=
        ' phoneNumberConfirmed = :phoneNumberConfirmed,';
      updateParams.ExpressionAttributeValues[':phoneNumberConfirmed'] =
        data.phoneNumberConfirmed;
    }

    if (data.firstName) {
      updateParams.UpdateExpression += ' firstName = :firstName,';
      updateParams.ExpressionAttributeValues[':firstName'] = data.firstName;
    }

    if (data.lastName) {
      updateParams.UpdateExpression += ' lastName = :lastName,';
      updateParams.ExpressionAttributeValues[':lastName'] = data.lastName;
    }

    if (data.email) {
      updateParams.UpdateExpression += ' email = :email,';
      updateParams.ExpressionAttributeValues[':email'] = data.email;
    }

    if (data.password) {
      updateParams.UpdateExpression += ' password = :password,';
      updateParams.ExpressionAttributeValues[':password'] = data.password;
    }

    if (data.referalCode) {
      updateParams.UpdateExpression += ' referalCode = :referalCode,';
      updateParams.ExpressionAttributeValues[':referalCode'] = data.referalCode;
    }

    if (data.referredBy) {
      updateParams.UpdateExpression += ' referedBy = :referedBy,';
      updateParams.ExpressionAttributeValues[':referedBy'] = data.referredBy;
    }

    if (data.credits) {
      updateParams.UpdateExpression += ' credits = :credits,';
      updateParams.ExpressionAttributeValues[':credits'] = data.credits;
    }

    if (data.phoneNumber) {
      updateParams.UpdateExpression += ' phoneNumbers = :phoneNumbers,';
      updateParams.ExpressionAttributeValues[':phoneNumbers'] =
        data.phoneNumber;
    }

    if (data.passwordResetToken) {
      updateParams.UpdateExpression +=
        ' passwordResetToken = :passwordResetToken,';
      updateParams.ExpressionAttributeValues[':passwordResetToken'] =
        data.passwordResetToken;
    }

    if (data.passwordResetTokenExpireDate) {
      updateParams.UpdateExpression +=
        ' passwordResetTokenExpireDate = :passwordResetTokenExpireDate,';
      updateParams.ExpressionAttributeValues[':passwordResetTokenExpireDate'] =
        data.passwordResetTokenExpireDate;
    }

    if (data.role) {
      updateParams.UpdateExpression += ' role = :role,';
      updateParams.ExpressionAttributeValues[':role'] = data.role;
    }

    if (data.profileImage) {
      updateParams.UpdateExpression += ' profileImage = :profileImage,';
      updateParams.ExpressionAttributeValues[':profileImage'] =
        data.profileImage;
    }

    updateParams.UpdateExpression = updateParams.UpdateExpression.slice(0, -1);

    return this.db.update(updateParams);
  }

  delete(id: string) {
    const params = {
      TableName: this.tableName,
      Key: {
        PK: 'USER',
        SK: id,
      },
    };
    return this.db.delete(params);
  }
}
