import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from './commands/create-user.command';
import { CreateUserHandler } from './commands/create-user.handler';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserHandler: CreateUserHandler,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<string> {
    const command = new CreateUserCommand(dto.email, dto.password, dto.name);
    await this.createUserHandler.execute(command);
    return 'User created!';
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
