import { Component, OnInit } from '@angular/core';
import {ReunionService} from '../../../service/reunion.service';
import {Reunion} from '../../../interface/reunion';

@Component({
  selector: 'app-list-reunion',
  templateUrl: './list-reunion.component.html',
  styleUrls: ['./list-reunion.component.css']
})
export class ListReunionComponent implements OnInit {

  constructor(private reunionService: ReunionService) { }

  reunionList: Reunion [] = [];

  ngOnInit() {
    this.reunionService.getAllReunions().subscribe(value => {
        this.reunionList = value;
      }
    );
  }

}
