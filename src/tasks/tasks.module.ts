import { Module } from '@nestjs/common';
import { TaskController } from './controllers/tasks/tasks.controller';
import { TasksService } from './services/tasks/tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TasksService],
})
export class TasksModule {}
