import { Component, OnInit } from '@angular/core';

import {Registry} from './registry';
import {RegistryService} from '../registry.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  registries: Registry[];

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
    this.getRegistries();
  }

  getRegistries(): void{
    this.registryService.getTeams()
    .subscribe(registries => this.registries = registries);
  }

}
