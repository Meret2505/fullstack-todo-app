import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(title: string): Task {
    const task = { id: this.idCounter++, title, completed: false };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  toggleCompleted(id: number): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
    return task;
  }
}
