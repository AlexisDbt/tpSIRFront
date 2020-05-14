import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reunion} from '../interface/reunion';
import {Propositions} from '../interface/propositions';

@Injectable({
  providedIn: 'root'
})
export class PropositionsService {
  baseRoute: string;
  propositionRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = 'http://localhost:4200/rest/';
    this.propositionRoute = 'propositions';
  }

  createProposition(propositions: Propositions) {
    return this.http.post<Propositions>(`${this.baseRoute + this.propositionRoute}`, propositions);
  }
}
