import { Component, OnInit } from '@angular/core';

import { Calendar } from './calendar';
import { CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendars: Calendar[];
  selectedCalendar: Calendar;

  constructor(private calendarService: CalendarService) { 
    
  }

  ngOnInit() {
    this.getCalendars();
  }

  onSelect(calendar: Calendar): void{
    this.selectedCalendar = calendar;
  }

  getCalendars(): void{
    this.calendarService.getCalendars()
    .subscribe(calendars => this.calendars = calendars);
  }

}
