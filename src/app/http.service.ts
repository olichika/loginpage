import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

    postData(user: User) {

        const body = {email: user.email, pass: user.pass};
        return this.http.post('http://localhost:60820/api/values', body);
    }
}
