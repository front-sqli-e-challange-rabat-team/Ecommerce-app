import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ForbiddenError, subject } from '@casl/ability';
import { AbilityService } from '../services/ability.service';
import { Action, RequirementsRules } from '../types/index';
import { PUT_ABILITY } from 'src/shared/constants/ability';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityService: AbilityService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const rules =
      this.reflector.get<RequirementsRules[]>(
        PUT_ABILITY,
        context.getHandler(),
      ) || [];

    const req = context.switchToHttp().getRequest<Request>();

    const ability = this.abilityService.createForUser(
      (<Request & { user: any }>req).user,
    );

    const isCreation = (action: Action) => action === Action.Create;

    try {
      rules.forEach((rule) =>
        ForbiddenError.from(ability).throwUnlessCan(
          rule.action,
          isCreation(rule.action)
            ? rule.subject
            : subject(
                rule.subject.toString(),
                req[rule.subject.toString().toLowerCase()],
              ),
        ),
      );
    } catch (error) {
      if (error instanceof ForbiddenError)
        throw new ForbiddenException(error.message);
    }

    return true;
  }
}
