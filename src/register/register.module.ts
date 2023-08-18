import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
