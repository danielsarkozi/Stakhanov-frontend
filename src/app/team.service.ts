import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from './team/team';
import { Teams } from './team/team-list';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Observable<Team[]> {
    return of(Teams);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
