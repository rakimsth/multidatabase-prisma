import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '../../node_modules/@prisma/registration';

@Injectable()
export class PrismaRegistrationService
  extends PrismaClient
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaRegistrationService.name);
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log(
      'Successfully connected to postgres database: registration',
    );
  }

  async enableShutdownHooks(): Promise<void> {
    this.$disconnect;
    this.logger.log(
      'Successfully disconnected to postgres database: registration',
    );
  }
}
