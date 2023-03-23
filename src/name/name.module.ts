import { Module } from '@nestjs/common';
import { NameService } from './name.service';
import { NameController } from './name.controller';

@Module({
  imports: [],
  providers: [NameService],
  controllers: [NameController],
})
export class NamesModule {}
