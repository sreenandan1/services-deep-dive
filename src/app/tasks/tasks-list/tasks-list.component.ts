import { Component, computed, inject, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task, TASK_STATUS_OPTIONS, TaskStatusOptions } from '../../tasks.model';

@Component({
  selector: 'app-tasks-list',
  standalone: false,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: []
})
export class TasksListComponent {
  private taskService = inject(TasksService);
  selectedFilter = signal<string>('all');
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
}
