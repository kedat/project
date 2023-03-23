import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from './interfaces/item.interface';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [
    {
      id: 10,
      name: 'ljlk',
      age: 123,
      address: 'nh',
    },
    {
      id: 15,
      name: 'dat',
      age: 12356787,
      address: 'nh',
    },
  ];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): IUser[] {
    return this.users;
  }

  // findOne(name: string): IUser {
  //   return this.users.find((user) => user.name === name);
  // }

  findOne(id: number): IUser {
    return this.users.find((user) => user.id == id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
