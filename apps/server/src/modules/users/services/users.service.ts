import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/users.model';
import { UsersRepository } from '../repository/users.repository';
import { User } from '../types';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  update(data: Partial<User>) {
    return this.repository.update(data);
  }

  getByResetToken(token: string) {
    return this.repository.getByResetToken(token);
  }

  getByReferalCode(referalCode: string) {
    return this.repository.getByReferalCode(referalCode);
  }
  getById(id: string) {
    return this.repository.getById(id);
  }

  getByEmail(email: string) {
    return this.repository.getByEmail(email);
  }

  create(user: UserModel) {
    return this.repository.create(user);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
