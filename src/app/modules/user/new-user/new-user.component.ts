import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {Participant} from '../../../interface/participant';
import {Reunion} from '../../../interface/reunion';
import {ReunionService} from '../../../service/reunion.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private reunionService: ReunionService, private _snackBar: MatSnackBar) { }

  reunionList: Reunion[] = [];
  form: FormGroup;
  emptyPrenom: boolean;
  emptyNom: boolean;
  emptyMail: boolean;

  newParticipant: Participant = {
    email: null,
    nom: null,
    prenom: null,
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
    console.log(this.newParticipant);
    this.emptyPrenom = !Boolean(this.newParticipant.prenom);
    this.emptyNom = !Boolean(this.newParticipant.nom);
    this.emptyMail = !Boolean(this.newParticipant.email);
    if (!this.emptyMail && !this.emptyNom && !this.emptyPrenom){
      console.log("champ rempli");
      this.userService.createParticipant(this.newParticipant).subscribe(value => {
        this._snackBar.open("Nouveau participant créé !",'',{
          duration: 3000,
        });
        this.router.navigate(['/']);
          debugger;

        }
      );
  }
  }
}
