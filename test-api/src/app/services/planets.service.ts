import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private url = "https://swapi.dev/api/planets";

  constructor(private httpClient: HttpClient) { }

  getPlanets(){
    return this.httpClient.get(this.url);
  }
}
