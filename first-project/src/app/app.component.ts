
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string | Date; } 

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
