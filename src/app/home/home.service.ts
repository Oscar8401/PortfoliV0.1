import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../app.config';
import {Home} from './home.model';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  get(): Observable<Home> {
    return this.http.get<Home>(AppConfig.apiEndpoint.home);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
