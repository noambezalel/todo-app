import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      username: 'noam',
      password: 'noam123',
    },
    {
      username: 'test',
      password: '1234',
    },
  ];
  async getUsers(): Promise<User[]> {
    return this.users.map((user) => new User(user));
  }

  async getUserByUsername(username: string) {
    return new User(this.users.find((user) => user.username === username));
  }
}
