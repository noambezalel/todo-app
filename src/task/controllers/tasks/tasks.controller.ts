import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from 'src/task/services/tasks/tasks.service';
import { Task } from 'src/task/schemas/task.schema';
import { CreateTaskDto } from 'src/task/dto/CreateTask.dto';
import { UpdateTaskDto } from 'src/task/dto/UpdateTask.dto';

@Controller('tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}
  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.getAll();
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<Task> {
    const task: Task = await this.tasksService.getTask(id);
    if (task) return task;
    throw new HttpException(
      `Task not found by id: ${id}`,
      HttpStatus.BAD_REQUEST,
    );
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
