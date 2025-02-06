import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-item',
  standalone: false,
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  
  
  constructor(private taskService:TasksService ){}

}
