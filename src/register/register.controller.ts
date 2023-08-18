import { Body, Controller, Logger, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  private readonly _logger = new Logger('Register Controller');

  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.registerService.create(createUserDto);
  }
}
