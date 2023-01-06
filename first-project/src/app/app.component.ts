import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Zadań';

  getTask(): string {
    return 'Przykładowe zadanie - 01.01 Niedziela';
  }
  getOccurTask(): string {
    return 'zrobione';
  }
  
  getHeader(): string {
    return 'Dzisiaj brak zadań :-)';
   
  }

  getTimeComunicat(): string {
    return 'Aktualna godzina: ';
   
  }

  getFooter(): string {
    return ' © Lista zadań, All rights reserved.';
  }

  getDate(): Date {
    return new Date();
  }

}
