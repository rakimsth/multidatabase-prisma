import { Module } from '@nestjs/common';
import { PrismaRegistrationService } from './prisma-registration.service';
import { PrismaAppService } from './prisma-app.service';

@Module({
  providers: [PrismaRegistrationService, PrismaAppService],
  exports: [PrismaRegistrationService, PrismaAppService],
})
export class DatabaseModule {}
