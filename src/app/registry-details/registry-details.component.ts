import { Component, OnInit, Input } from '@angular/core';

import {Registry} from '../registry/registry'

@Component({
  selector: 'app-registry-details',
  templateUrl: './registry-details.component.html',
  styleUrls: ['./registry-details.component.css']
})
export class RegistryDetailsComponent implements OnInit {

  @Input() registry: Registry;

  constructor() { }

  ngOnInit() {
  }

}
