import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TeamComponent } from './team/team.component';
import { RegistryComponent } from './registry/registry.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDetailComponent,
    MessagesComponent,
    TeamComponent,
    RegistryComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule, 
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
