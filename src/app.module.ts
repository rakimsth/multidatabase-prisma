import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [RegisterModule, UsersModule, DatabaseModule],
})
export class AppModule {}
