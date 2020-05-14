import { Component, OnInit } from '@angular/core';
import {SondageService} from '../../../service/sondage.service';
import {Router} from '@angular/router';
import {Sondage} from '../../../interface/sondage';
import {Participant} from '../../../interface/participant';
import {Reunion} from '../../../interface/reunion';
import {Mail} from '../../../interface/mail';
import {ReunionService} from '../../../service/reunion.service';
import {Propositions} from '../../../interface/propositions';
import {ReponseSondage} from '../../../interface/reponse-sondage';
import {PropositionsService} from '../../../service/propositions.service';

@Component({
  selector: 'app-new-sondage',
  templateUrl: './new-sondage.component.html',
  styleUrls: ['./new-sondage.component.css']
})
export class NewSondageComponent implements OnInit {

  constructor(private sondageService: SondageService, private router: Router, private reunionService: ReunionService, private propositionsService: PropositionsService) { }

  newSondage: Sondage = {
    id: null,
    lienWeb: '',
    // tslint:disable-next-line:new-parens
    createur: new class implements Participant {
      allergie: string;
      email: string;
      mails: Mail[];
      nom: string;
      preferenceAlim: string;
      prenom: string;
      reunions: Reunion[];
      sondages: Sondage[];
    },
    reponses: [],
    propositions: []
  };

  newReunion: Reunion = {
    id: null,
    intitule: '',
    resume: '',
    date: new Date(),
    participants: [],
    // tslint:disable-next-line:new-parens
    mail: new class implements Mail {
      code: string;
      id: number;
      lienPad: string;
      lienPause: string;
      participants: Participant[];
      reunions: Reunion[];
    }
  };

  newProposition: Propositions = {
    id: null,
    date: new Date(),
    // tslint:disable-next-line:new-parens
    sondage: new class implements Sondage {
      createur: Participant;
      id: number;
      lienWeb: string;
      propositions: Propositions[];
      reponses: ReponseSondage[];
    }
  };

  newProposition2: Propositions = {
    id: null,
    date: new Date(),
    // tslint:disable-next-line:new-parens
    sondage: new class implements Sondage {
      createur: Participant;
      id: number;
      lienWeb: string;
      propositions: Propositions[];
      reponses: ReponseSondage[];
    }
  };

  ngOnInit(): void {
  }

  addSondage() {
    this.sondageService.createSondage(this.newSondage).subscribe(value => {});
    this.reunionService.createReunion(this.newReunion).subscribe(value => {});
    this.propositionsService.createProposition(this.newProposition).subscribe(value => {});
    this.propositionsService.createProposition(this.newProposition2).subscribe(value => {});
  }


}
