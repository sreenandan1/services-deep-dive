import { Component, computed, input } from '@angular/core';
import { Task, TasksStatus } from '../../../tasks.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-item',
  standalone: false,
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css',
})
export class TasksItemComponent {
  task = input.required<Task>();

  constructor(private taskService: TasksService) {}

  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working On it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TasksStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.taskService.updateTaskStatus(taskId, newStatus);
  }


  trackByTaskId(index:number,task:Task){
    return task.id

  }
}
