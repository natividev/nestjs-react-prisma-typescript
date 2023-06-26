import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createTaskDto, updateTaskDto } from './../dto/index';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaClient) {}
  async findAll() {
    return await this.prismaService.task.findMany({
      where: { done: false },
    });
  }

  async createTask({ title, description, done }: createTaskDto) {
    const existingTask = await this.prismaService.task.findUnique({
      where: { title },
    });

    if (existingTask) {
      // Ya existe una tarea con el mismo título, puedes manejarlo adecuadamente
      throw new ConflictException('Ya existe una tarea con el mismo título');
    }
    return await this.prismaService.task.create({
      data: {
        title,
        description,
        done,
      },
    });
  }

  async updateTask(id: number, { title, description, done }: updateTaskDto) {
    return this.prismaService.task.update({
      where: { id },
      data: {
        title,
        description,
        done,
      },
    });
  }
  async deleteTask(id: number) {
    return this.prismaService.task.update({
      where: { id },
      data: {
        done: true,
      },
    });
  }
}
