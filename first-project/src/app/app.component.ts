
import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   config: { [key: string]: string | Date; } 
   tasks: Task[] = [
      {
          name: 'Nauka' ,
          deadline: '2023-02-03' ,
          done: false,
      },
   {
    name: 'Birthday' ,
    deadline: '2023-09-07' ,
    done: false,
   }
    ];

   constructor() {
     this.config = {
      title: 'Lista zadań' ,
      task: 'Przykładowe zadanie - 01.01 Niedziela' ,
      occurtask: 'zrobione' ,
      timecomunicat: 'Aktualna godzina: ' ,
      footer: ' © Lista zadań, All rights reserved.',
      date: new Date().toDateString(),
    }
  
  }


}
