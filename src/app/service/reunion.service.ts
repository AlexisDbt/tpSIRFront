import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reunion} from '../interface/reunion';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  baseRoute: string;
  reunionRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = 'http://localhost:4200/rest/';
    this.reunionRoute = 'reunion/list';
  }

  createReunion(reunion: Reunion) {
    return this.http.post<Reunion>(`${this.baseRoute + this.reunionRoute}`, reunion);
  }

  getAllReunions(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(`${this.baseRoute + this.reunionRoute}`);
  }
}
