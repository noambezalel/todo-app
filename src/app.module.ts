import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING), TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
