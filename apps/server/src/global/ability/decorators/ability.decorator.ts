import { SetMetadata } from '@nestjs/common';
import { PUT_ABILITY } from 'src/shared/constants/ability';
import { RequirementsRules } from '../types';

export const PutAbilities = (...requirements: RequirementsRules[]) =>
  SetMetadata(PUT_ABILITY, requirements);
