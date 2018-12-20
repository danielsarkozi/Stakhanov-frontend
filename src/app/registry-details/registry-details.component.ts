import { Component, OnInit, Input } from '@angular/core';

import {Registry} from '../registry/registry'
import {RegistryService} from '../registry.service'

@Component({
  selector: 'app-registry-details',
  templateUrl: './registry-details.component.html',
  styleUrls: ['./registry-details.component.css']
})
export class RegistryDetailsComponent implements OnInit {

  @Input() registry: Registry;

  constructor(private registryService: RegistryService) { }

  ngOnInit() {
  }

  submitChanges(): void{
    this.registryService.putRegistry(this.registry);
    console.log("ok");
  }
}
