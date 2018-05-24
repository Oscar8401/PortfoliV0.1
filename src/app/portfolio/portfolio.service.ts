import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../app.config';
import {Portfolio} from './portfolio.model';

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) { }

  get(): Observable<Portfolio> {
    return this.http.get<Portfolio>(AppConfig.apiEndpoint.portfolio);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
