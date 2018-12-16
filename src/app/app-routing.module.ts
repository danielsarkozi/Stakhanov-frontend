import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TeamComponent}          from './team/team.component';
import {RegistryComponent}      from './registry/registry.component';
import {CalendarComponent}      from './calendar/calendar.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'teams', component: TeamComponent }, 
  { path: 'registries', component: RegistryComponent }, 
  { path: 'calendars', component: CalendarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}