import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

  getLocations = (term): Observable<Array<string>> => this.http.get<Array<string>>
  ('https://cors-anywhere.herokuapp.com/http://gd.geobytes.com/AutoCompleteCity', {
    params: {
      sort: 'size',
      q: term.toString()
    }
  })
}
