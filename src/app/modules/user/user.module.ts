import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AccueilUserComponent, ListUserComponent, NewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
