import { Component, OnInit, Input } from '@angular/core';

import { Calendar } from '../calendar/calendar';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {

  @Input() calendar: Calendar;

  constructor() { }

  ngOnInit() {
  }

}
