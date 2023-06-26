import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class createTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  done: boolean;
}
