import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '../../node_modules/@prisma/gigaApp';

@Injectable()
export class PrismaAppService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaAppService.name);
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Successfully connected to postgres database: app');
  }

  async enableShutdownHooks(): Promise<void> {
    this.$disconnect;
    this.logger.log('Successfully disconnected to postgres database: app');
  }
}
