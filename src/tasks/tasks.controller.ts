import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './../dto/index';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('tasks')
  async getAllTasks() {
    return this.tasksService.findAll();
  }
  @Post('create-taks')
  async createTask(@Body() createTaskDto: createTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
  @Put('update-task')
  async updateTask(
    @Query('id') id: number,
    @Body() updateTaskDto: updateTaskDto,
  ) {
    return this.tasksService.updateTask(Number(id), updateTaskDto);
  }
  @Delete('delete-task')
  async deleteTask(@Query('id') id: number) {
    return this.tasksService.deleteTask(Number(id));
  }
}
