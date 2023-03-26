import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/item.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  // findAll(): IUser[] {
  //   return this.users;
  // }
  async findAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  // findOne(name: string): IUser {
  //   return this.users.find((user) => user.name === name);
  // }

  async findOne(id: number): Promise<IUser> {
    return await this.userModel.findOne({ _id: id });
  }

  async create(user: IUser): Promise<IUser> {
    const newItem = new this.userModel(user);
    return await newItem.save();
  }

  async delete(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, item: IUser): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(id, item, { new: true });
  }
}
