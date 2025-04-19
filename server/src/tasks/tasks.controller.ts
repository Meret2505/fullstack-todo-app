import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':id/toggle')
  toggleCompleted(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.toggleCompleted(id);
  }
}
