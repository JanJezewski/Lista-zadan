
import { Component, NgModule } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  editMode = false;
 
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  taskName = 'Sugerowane zadanie codzienne' 
  taskDate = '';
  config: { [key: string]: string | Date; } 
  
  tasks: Task[] = [
      {
          name: '.Nauka' ,
          deadline: '2023-02-03' ,
          done: false,
      },
   {
    name: '.Birthday' ,
    deadline: '2023-09-07' ,
    done: false,
   }
    ];

   constructor() {
     this.config = {
      title: 'Lista zadań' ,
      task: 'Przykładowe zadanie - 01.01 Niedziela' ,
      
      timecomunicat: 'Aktualna godzina: ' ,
      footer: ' © Lista zadań, All rights reserved.',
      date: new Date(),
    }
  
  }
  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
