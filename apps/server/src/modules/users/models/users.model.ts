import * as rs from 'randomstring';
import { v4 } from 'uuid';

export class UserModel {
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  private readonly _referalCode: string;
  private readonly _userId: string;
  private readonly _profileImage: string;
  private readonly _emailConfirmationCode: string;
  private readonly _emailConfirmed: boolean;
  private readonly _phoneNumberConfirmed: boolean;
  constructor(
    private readonly _firstName: string,
    private readonly _lastName: string,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _role: string,
    private readonly _phoneNumber: string,
    private readonly _referedBy?: string,
  ) {
    this._referalCode = rs.generate({ length: 8, charset: 'alphanumeric' });
    this._userId = v4();
    this._profileImage = '';
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._emailConfirmationCode = '';
    this._emailConfirmed = false;
    this._phoneNumberConfirmed = false;
  }

  get emailConfirmationCode() {
    return this._emailConfirmationCode;
  }

  get emailConfirmed() {
    return this._emailConfirmed;
  }

  get phoneNumberConfirmed() {
    return this._phoneNumberConfirmed;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get referalCode() {
    return this._referalCode;
  }

  get referedBy() {
    return this._referedBy;
  }

  get userId() {
    return this._userId;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get role() {
    return this._role;
  }

  get profileImage() {
    return this._profileImage;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
