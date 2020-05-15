import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './modules/accueil/accueil.component';
import {ListUserComponent} from './modules/user/list-user/list-user.component';
import {NewUserComponent} from './modules/user/new-user/new-user.component';
import {NewSondageComponent} from './modules/sondage/new-sondage/new-sondage.component';
import {NewReunionComponent} from './modules/reunion/new-reunion/new-reunion.component';
import {ListReunionComponent} from './modules/reunion/list-reunion/list-reunion.component';
import {MatSnackBar} from "@angular/material/snack-bar";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', loadChildren: './modules/user/user.module#UserModule'},
  {path: 'list-utilisateurs', component: ListUserComponent},
  {path: 'creer-utilisateur', component: NewUserComponent},
  {path: 'creer-sondage', component: NewSondageComponent},
  {path: 'creer-reunion', component: NewReunionComponent},
  {path: 'list-reunion', component: ListReunionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
