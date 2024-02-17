import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { TaskStatus } from "../task.entity"

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsString()
  description: string
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string
  @IsOptional()
  description?: string
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus
}