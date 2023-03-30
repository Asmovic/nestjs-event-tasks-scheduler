import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserRequest } from './dto/create-user.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createUser(@Body() body: createUserRequest): Promise<void>{
    await this.appService.createUser(body);
  }
}
