import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { httpOptions } from './auth.service';

import { Calendar } from './calendar/calendar';
import {Registry} from './registry/registry';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getCalendars(): Promise<Calendar[]> {
    return this.http.get<Calendar[]>(`http://localhost:8080/calendars`, httpOptions).toPromise();
  }

  getCalendarById(calendar: Calendar): Promise<Calendar>{
    return this.http.get<Calendar>(`http://localhost:8080/calendars/${calendar.id}`, httpOptions).toPromise();
  }

  putCalendar(calendar: Calendar): Promise<Calendar>{
    return this.http.put<Calendar>(`http://localhost:8080/calendars/${calendar.id}`, calendar, httpOptions).toPromise();
  }

  getRegistries(calendar: Calendar):  Promise<Registry[]>{
    return this.http.get<Registry[]>(`http://localhost:8080/calendars/${calendar.id}/registries`, httpOptions).toPromise();
  }

  postRegistries(calendar: Calendar, registry:Registry): Promise<Registry>{
    console.log("asd");
    return this.http.post<Registry>(`http://localhost:8080/calendars/${calendar.id}/registries`, registry, httpOptions).toPromise();
  }
}
