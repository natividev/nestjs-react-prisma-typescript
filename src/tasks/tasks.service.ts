import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaClient) {}
  async findAll() {
    return await this.prismaService.task.findMany();
  }
}
