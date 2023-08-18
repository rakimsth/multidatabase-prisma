import { Injectable, Logger } from '@nestjs/common';
import { PrismaRegistrationService } from 'src/databases/prisma-registration.service';

@Injectable()
export class RegisterService {
  private readonly _logger = new Logger('User Services');
  constructor(private prisma: PrismaRegistrationService) {}

  async create(createRegistrationDto) {
    this._logger.log(`Registering new user: ${createRegistrationDto?.email}`);
    return this.prisma.registration.create({
      data: {
        ...createRegistrationDto,
      },
    });
  }
}
