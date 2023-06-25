import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('tasks')
  async getAllTasks() {
    return this.tasksService.findAll();
  }
}
