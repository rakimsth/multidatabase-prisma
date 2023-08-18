import { Injectable, Logger } from '@nestjs/common';
import { PrismaAppService } from 'src/databases/prisma-app.service';

@Injectable()
export class UsersService {
  private readonly _logger = new Logger('User Services');
  constructor(private prisma: PrismaAppService) {}

  async create(createUserDto) {
    this._logger.log(`Creating new user: ${createUserDto?.email}`);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });
  }
}
