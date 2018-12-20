import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { httpOptions } from './auth.service';

import {Registry} from './registry/registry';



@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private http: HttpClient) { }

  getRegistries(): Promise<Registry[]>{
    return this.http.get<Registry[]>(`http://localhost:8080/registries`, httpOptions).toPromise();
  }

  getRegistryById(registry: Registry): Promise<Registry>{
    return this.http.get<Registry>(`http://localhost:8080/registries/${registry.id}`, httpOptions).toPromise();
  }

  postRegistry(registry: Registry): Promise<Registry>{
    return this.http.post<Registry>(`http://localhost:8080/registries`, registry, httpOptions).toPromise();
  }

  putRegistry(registry: Registry): Promise<Registry>{
    return this.http.put<Registry>(`http://localhost:8080/registries/${registry.id}`, registry, httpOptions).toPromise();
  }

  deleteRegistry(registry: Registry): Promise<Registry>{
    return this.http.delete<Registry>(`http://localhost:8080/registries/${registry.id}`, httpOptions).toPromise();
  }

}