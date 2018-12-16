import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Registry} from './registry/registry';
import {Registries} from './registry/registry-list';



@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor() { }

  getTeams(): Observable<Registry[]> {
    return of(Registries);
  }
}