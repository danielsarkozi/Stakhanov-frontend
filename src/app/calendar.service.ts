import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Calendar } from './calendar/calendar';
import { Calendars } from './calendar/mock-calendars';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private messageService: MessageService) { }

  getCalendars(): Observable<Calendar[]> {
    this.messageService.add('CalendarService: fetched calendars');
    return of(Calendars);
  }
}
