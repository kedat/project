import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/item.interface';
import { CreateUserDto } from './DataTransferObject/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): IUser[] {
    return this.usersService.findAll();
  }

  // @Get(':name')
  // findOne(@Param('name') name): IUser {
  //   return this.usersService.findOne(name);
  // }

  @Get(':id')
  findOne(@Param('id') id): IUser {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `This ${createUserDto.id} is already ${createUserDto.age} years old`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete user ${id}`;
  }

  @Put(':id')
  update(@Body() updateNameDto: CreateUserDto, @Param('id') id): string {
    return `Update user ${id} - Name: ${updateNameDto.name}`;
  }
}
