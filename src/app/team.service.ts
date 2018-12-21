import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { httpOptions } from './auth.service';
import { Team } from './team/team';
import { MessageService } from './message.service';
import {PublicPerson} from './team/publicperson'
import {Registry} from './registry/registry'
import {User} from './user'

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

  getTeamById(team: Team): Promise<Team>{
    return this.http.get<Team>(`http://localhost:8080/teams/${team.id}`, httpOptions).toPromise();
  }

  getTeammates(team: Team): Promise<PublicPerson[]>{
    return this.http.get<PublicPerson[]>(`http://localhost:8080/teams/${team.id}/teammates`, httpOptions).toPromise();
  }

  postTeam(team: Team): Promise<Team>{
    return this.http.post<Team>(this.teamUrl, team, httpOptions).toPromise();
  }

  putTeam(team: Team): Promise<Team>{
    return this.http.put<Team>(`http://localhost:8080/teams/${team.id}`, team, httpOptions).toPromise();
  }

  postRegistry(team: Team, registry: Registry): Promise<Registry>{
    return this.http.post<Registry>(`http://localhost:8080/teams/${team.id}/registry`, registry, httpOptions).toPromise();
  }

  deleteTeam(team: Team): Promise<Team>{
    return this.http.delete<Team>(`http://localhost:8080/teams/${team.id}`, httpOptions).toPromise();
  }

  addUser(team: Team): Promise<User>{
    return this.http.post<User>(`http://localhost:8080/teams/${team.id}/user`, team, httpOptions).toPromise();
  }
}
