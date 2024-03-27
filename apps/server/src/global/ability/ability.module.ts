import { Global, Module } from '@nestjs/common';
import { AbilityService } from './services/ability.service';

@Global()
@Module({
  providers: [AbilityService],
  exports: [AbilityService],
})
export class AbilityModule {}
