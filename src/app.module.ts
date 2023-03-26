import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { NameController } from './name/name.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController, UsersController, NameController],
  providers: [AppService],
})
export class AppModule {}
