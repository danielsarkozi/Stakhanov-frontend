import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { httpOptions } from './auth.service';

import { MessageService } from './message.service';
import { Calendar } from './calendar/calendar';
import { Calendars } from './calendar/mock-calendars';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getCalendars(): Observable<Calendar[]> {
    return of(Calendars);
  }
}
