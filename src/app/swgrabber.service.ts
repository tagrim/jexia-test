import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SWGrabberService {
  private apiUrl = 'https://swapi.co/api/people/';

  constructor(
    private http: HttpClient
  ) { }

  getPeople(name?: string, pageUrl?: string): Observable<any> {
    let searchAppendix = '';
    if (name) {
      searchAppendix = `?search=${name}`;
    }

    const url = pageUrl || (this.apiUrl + searchAppendix);
    return this.http.get(url);
  }

  getPlanet(link: string) {
    return this.http.get(link);
  }
}
