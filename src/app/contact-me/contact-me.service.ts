import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../app.config';
import {ContactMe} from './contact-me.model';

@Injectable()
export class ContactMeService {

        constructor(private http: HttpClient) { }

        get(): Observable<ContactMe> {
                return this.http.get<ContactMe>(AppConfig.apiEndpoint.contactme);
        }

        private handleError(error: Response) {
                return Observable.throw(error.statusText);
        }
}
