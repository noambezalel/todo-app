import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE')
    private usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  async getUserByUsername(@Param('username') username: string): Promise<User> {
    const user: User = await this.usersService.getUserByUsername(username);
    if (user) return user;
    throw new HttpException(
      `User "${username}" not found`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
