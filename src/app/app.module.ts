import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksItemComponent } from './tasks/tasks-list/tasks-item/tasks-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TasksListComponent,
    TasksItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
