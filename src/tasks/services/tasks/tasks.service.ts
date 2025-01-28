import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from 'src/tasks/dto/UpdateTask.dto';
import { CreateTaskDto } from 'src/tasks/dto/CreateTask.dto';
import { Task } from 'src/tasks/schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: mongoose.Model<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    const tasks = await this.taskModel.find();
    return tasks;
  }
  async getTask(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);
    return task;
  }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(createTaskDto);
  }
  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto);
  }
  async deleteTask(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id);
  }
}
