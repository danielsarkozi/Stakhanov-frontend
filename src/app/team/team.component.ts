import { Component, OnInit } from '@angular/core';

import {Team} from './team';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[];
  selectedTeam: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  onSelect(team: Team): void{
    this.selectedTeam = team;
  }

  getTeams(): void{
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }
}
