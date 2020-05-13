import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Participant} from '../interface/participant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseRoute: string;
  userRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = 'http://localhost:4200/rest/';
    this.userRoute = 'participants/list';
  }

  getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.baseRoute + this.userRoute}`);
  }
}
