import { Component, inject, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: false,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  private taskService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = this.taskService.allTasks;

  onChangeTaskFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
