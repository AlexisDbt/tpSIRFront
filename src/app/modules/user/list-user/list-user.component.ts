import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Participant} from '../../../interface/participant';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  participantList: Participant[] = [];

  ngOnInit() {
    this.userService.getAllParticipants().subscribe(value => {
        this.participantList = value;
      }
    );
  }
}
