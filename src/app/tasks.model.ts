import { InjectionToken, Provider } from '@angular/core';

export type TasksStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TASK_STATUS_OPTIONS = new InjectionToken('task-status-options');

type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TasksStatus;
  text: string;
}[];

export const TaskStatusOptions = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export const taskStatusOptionsProvider: Provider = {
    
        provide:TASK_STATUS_OPTIONS,
        useValue:TaskStatusOptions
      
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TasksStatus;
}
