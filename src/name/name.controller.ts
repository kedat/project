import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // Req,
  // Res,
} from '@nestjs/common';
import { CreateNameDto } from './DataTransferObject/create-item.dto';
// import { NameService } from './name.service';
// import { Request, Response } from 'express';

@Controller('name')
export class NameController {
  // constructor(private nameService: NameService) {}
  @Post()
  create(@Body() createNameDto: CreateNameDto): string {
    return `This ${createNameDto.breed}`;
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete Name ${id}`;
  }

  @Put(':id')
  update(@Body() updateNameDto: CreateNameDto, @Param('id') id): string {
    return `Update item ${id} - Name: ${updateNameDto.name}`;
  }

  @Get()
  findAll(): string {
    return 'Hello';
  }

  // @Get()
  // findAll(): Name[] {
  //   return this.nameService.findAll();
  // }
}
