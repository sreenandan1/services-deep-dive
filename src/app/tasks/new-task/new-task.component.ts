import { Component, ElementRef, viewChild } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private taskService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.taskService.addTask({ title, description });
console.log('task add');
    
    this.formEl()?.nativeElement.reset();
  }

  
}
