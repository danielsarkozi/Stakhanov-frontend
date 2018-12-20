import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { httpOptions } from './auth.service';
import { Team } from './team/team';
import { MessageService } from './message.service';
import {Person} from './person'
import {Registry} from './registry/registry'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl = 'http://localhost:8080/teams';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Promise<Team[]> {
    return this.http.get<Team[]>(this.teamUrl, httpOptions).toPromise();
  }
/*
  getTeamById(team: Team): Promise<Team>{
    return this.http.get<Team>(`http://localhost:8080/teams/${team.id}`, httpOptions).toPromise();
  }

  getTeammates(team: Team): Promise<Person[]>{
    return this.http.get<Person[]>(`http://localhost:8080/teams/${team.id}/teammates`, httpOptions).toPromise();
  }

  postTeam(team: Team): Promise<Team>{
    return this.http.post<Team>(this.teamUrl, team, httpOptions).toPromise();
  }

  putTeam(team: Team): Promise<Team>{
    return this.http.put<Team>(`http://localhost:8080/teams/${team.id}`, team, httpOptions).toPromise();
  }

  postRegistry(team: Team, registry: Registry): Promise<Registry>{
    return this.http.post<Registry>(`http://localhost:8080/teams/${team.id}/registry`, team, httpOptions).toPromise();
  }

  deleteTeam(team: Team): Promise<Team>{
    return this.http.delete<Team>(`http://localhost:8080/teams/${team.id}`, httpOptions).toPromise();
  }*/

  
}
