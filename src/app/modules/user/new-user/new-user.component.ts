import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {Participant} from '../../../interface/participant';
import {Reunion} from '../../../interface/reunion';
import {ReunionService} from '../../../service/reunion.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private reunionService: ReunionService) { }

  reunionList: Reunion[] = [];
  form: FormGroup;

  newParticipant: Participant = {
    email: '',
    nom: '',
    prenom: '',
    allergie: '',
    preferenceAlim: '',
    mails: [],
    reunions: [],
    sondages: []
  };

  ngOnInit(){
    this.reunionService.getAllReunions().subscribe(value => {
      this.reunionList = value;
    });
  }

  addParticipant() {
    this.userService.createParticipant(this.newParticipant).subscribe(value => {
          debugger;
      }
    );

  }
}
