import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = []; // DB 대신 임시 메모리 저장소

  async createUser(email: string, password: string, name: string) {
    const user: CreateUserDto = { email, password, name };
    this.users.push(user);
    console.log('✅ 유저 생성 완료', user);
  }

  getAllUsers() {
    return this.users;
  }
}
