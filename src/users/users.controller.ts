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
  findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  // @Get(':name')
  // findOne(@Param('name') name): IUser {
  //   return this.usersService.findOne(name);
  // }

  @Get(':id')
  findOne(@Param('id') id): Promise<IUser> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IUser> {
    return this.usersService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateNameDto: CreateUserDto,
    @Param('id') id,
  ): Promise<IUser> {
    return this.usersService.update(id, updateNameDto);
  }
}
