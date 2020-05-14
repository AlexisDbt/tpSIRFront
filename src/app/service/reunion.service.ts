import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sondage} from '../interface/sondage';
import {Reunion} from '../interface/reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  baseRoute: string;
  reunionRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = 'http://localhost:4200/rest/';
    this.reunionRoute = 'reunion';
  }

  createReunion(reunion: Reunion) {
    return this.http.post<Reunion>(`${this.baseRoute + this.reunionRoute}`, reunion);
  }
}
