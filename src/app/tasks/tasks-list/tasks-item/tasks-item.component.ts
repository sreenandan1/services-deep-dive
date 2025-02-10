import { Component, computed, inject, input } from '@angular/core';
import { Task, TASK_STATUS_OPTIONS, TasksStatus } from '../../../tasks.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-item',
  standalone: false,
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css',
  providers:[]
})
export class TasksItemComponent {
  task = input.required<Task>();

  constructor(private taskService: TasksService) {}
  taskStatusOptions = inject(TASK_STATUS_OPTIONS)

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
  trackByValue(index:number,option:{value:string}){
    return option.value
  }
}
