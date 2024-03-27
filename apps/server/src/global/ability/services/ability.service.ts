import { Injectable } from '@nestjs/common';

import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Action, Conditions, PossibleAbilities } from '../types';

@Injectable()
export class AbilityService {
  createForUser(user: any) {
    const { can, build } = new AbilityBuilder(
      createMongoAbility<PossibleAbilities, Conditions>,
    );

    // Users
    if (user.roles.includes('user')) {
      can(Action.Read, '');
    }

    // Admins
    if (user.roles.includes('admin') || user.roles.includes('superAdmin')) {
      can(Action.Manage, 'all');
    }
    return build();
  }
}
