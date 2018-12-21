import { Component, OnInit, Input } from '@angular/core';

import { Calendar } from '../calendar/calendar';
import {CalendarService} from '../calendar.service'
import {Registry} from '../registry/registry'

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {

  @Input() calendar: Calendar;
  registries: Registry[];
  tempregistry: Registry;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.tempregistry = new Registry();
  }
  
  async getRegistries(){
    this.registries = await this.calendarService.getRegistries(this.calendar);
  }

  newRegistry(): void{
    this.calendarService.postRegistries(this.calendar, this.tempregistry);
  }
}
