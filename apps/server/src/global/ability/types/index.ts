import { MongoAbility, MongoQuery } from '@casl/ability';
import { Subjects } from '@casl/prisma';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subject =
  | Subjects<{ Product: any; Media: any; User: any; Order: any }>
  | 'all';
export type PossibleAbilities = [Action, Subject];
export type Conditions = MongoQuery;

export type AppAbility = MongoAbility<PossibleAbilities, Conditions>;

export interface RequirementsRules {
  action: Action;
  subject: Subject;
}
