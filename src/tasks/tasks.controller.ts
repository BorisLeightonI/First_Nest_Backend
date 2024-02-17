import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService){}

  @Get()
  getAllTasks(){
    return this.taskService.getAllTasks();
  }

  @Post()
  createNewTask(@Body() newTask: CreateTaskDto){
    console.log('body', newTask);
    const {title, description} = newTask;
    return this.taskService.createTask(title, description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string){
    this.taskService.deleteTask(id);
    return 'ok';
  }

  @Patch('id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.taskService.updateTask(id, updatedFields);
  }
}
