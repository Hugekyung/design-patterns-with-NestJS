import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './command-patterns/users/users.module';
import { UsersService } from './command-patterns/users/users.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
