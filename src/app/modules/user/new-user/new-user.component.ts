import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {Participant} from '../../../interface/participant';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

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

  }

  addParticipant() {
    this.userService.createParticipant(this.newParticipant).subscribe(value => {
      this.router.navigate(['/utilisateur/list']);
      }
    );
  }
}
