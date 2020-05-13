import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilUserComponent} from './accueil-user/accueil-user.component';
import {NewUserComponent} from './new-user/new-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: AccueilUserComponent,
    children: [
      {path: 'new', component: NewUserComponent},
      {path: 'list', component: ListUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class UserRoutingModule { }
