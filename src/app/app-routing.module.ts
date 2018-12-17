import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TeamComponent}          from './team/team.component';
import {RegistryComponent}      from './registry/registry.component';
import {CalendarComponent}      from './calendar/calendar.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {AuthGuard}              from './auth.guard';
import {LoginComponent}         from './login/login.component'

const routes: Routes = [
  { path: 'teams', component: TeamComponent,
  canActivate: [AuthGuard] }, 
  { path: 'registries', component: RegistryComponent,
  canActivate: [AuthGuard] }, 
  { path: 'calendars', component: CalendarComponent,
  canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full',
  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}