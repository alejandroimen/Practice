import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocationsComplete } from '../interfaces/ilocations-complete';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://rickandmortyapi.com/api';

  getAllLocations(): Observable<ILocationsComplete> {
    return this.http.get<ILocationsComplete> (`${this.url}/location`);
  }
}
