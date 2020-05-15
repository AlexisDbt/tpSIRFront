import { Component, OnInit } from '@angular/core';
import {ReunionService} from '../../../service/reunion.service';
import {Reunion} from '../../../interface/reunion';
import {Mail} from '../../../interface/mail';
import {Participant} from '../../../interface/participant';

@Component({
  selector: 'app-new-reunion',
  templateUrl: './new-reunion.component.html',
  styleUrls: ['./new-reunion.component.css']
})
export class NewReunionComponent implements OnInit {

  constructor(private reunionService: ReunionService) { }

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

  ngOnInit(): void {
  }

  addReunion() {
    this.reunionService.createReunion(this.newReunion).subscribe(value => {});
  }


}
