import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class updateTaskDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  done: boolean;
}
