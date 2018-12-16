import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stakhanov';
  calendarSelected = false;
  teamSelected = false;
  registrySelected = false;
  dashSelected = true;
}