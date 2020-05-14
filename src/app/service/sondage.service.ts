import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sondage} from '../interface/sondage';

@Injectable({
  providedIn: 'root'
})
export class SondageService {
  baseRoute: string;
  sondageRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = 'http://localhost:4200/rest/';
    this.sondageRoute = 'sondage';
  }

  createSondage(sondage: Sondage) {
    return this.http.post<Sondage>(`${this.baseRoute + this.sondageRoute}`, sondage);
  }
}
