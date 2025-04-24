import { Injectable } from '@nestjs/common';
import { CreateUserCommand } from './create-user.command';
import { UsersService } from '../users.service';

@Injectable()
export class CreateUserHandler {
  constructor(private readonly usersService: UsersService) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { email, password, name } = command;
    await this.usersService.createUser(email, password, name); // 실제 유저 생성 로직은 서비스에 위임
  }
}
