import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserHandler } from './commands/create-user.handler';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserHandler],
})
export class UsersModule {}
