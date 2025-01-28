import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task } from '../../schemas/task.schema';
import { CreateTaskDto } from '../../dto/CreateTask.dto';
import { UpdateTaskDto } from '../../dto/UpdateTask.dto';

@Controller('tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.getAll();
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }
}
