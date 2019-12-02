import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SWGrabberService {
  private _apiUrl: string = 'https://swapi.co/api/people/';

  constructor(
    private http: HttpClient
  ) { }

  getPeople(name?: string, pageUrl?: string): Observable<any> {
    const url = pageUrl || (this._apiUrl + (name || ''));
    return this.http.get(url);
  }
}
