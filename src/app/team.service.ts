import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from './team/team';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};

interface FeathersResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: T[]
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl = 'http://localhost:8080/teams';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Promise<Team[]> {
    return this.http.get<FeathersResponse<Team>>(this.teamUrl)
      .pipe(map(response => response.data))
      .toPromise();
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getTeam(): Promise<Team> {
    return this.http.get<Team>(`${this.teamUrl}`).toPromise();
  }
}
