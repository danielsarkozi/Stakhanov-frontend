import { Component, OnInit } from '@angular/core';

import {Team} from './team';
import {TeamService} from '../team.service';
import {PublicPerson} from './publicperson'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[];
  selectedTeam: Team;
  teammates: PublicPerson[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  async onSelect(team: Team){
    this.selectedTeam = team;
    this.teammates = await this.teamService.getTeammates(team);
  }

  async getTeams(){
    this.teams = await this.teamService.getTeams();
    
  }
}
