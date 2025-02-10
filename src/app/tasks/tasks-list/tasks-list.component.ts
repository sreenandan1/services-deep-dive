import { Component, computed, inject, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import {
  Task,
  TASK_STATUS_OPTIONS,
  taskStatusOptionsProvider,
} from '../../tasks.model';

@Component({
  selector: 'app-tasks-list',
  standalone: false,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  constructor(private taskService: TasksService,) {}

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.taskService.allTasks();
      case 'open':
        return this.taskService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');

      case 'done':
        return this.taskService
          .allTasks()
          .filter((task) => task.status === 'DONE');

      default:
        return this.taskService.allTasks();
    }
  });
  onChangeTaskFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }
  trackByValue(index: number, option: { value: string }) {
    return option.value;
  }
}
