import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './modules/accueil/accueil.component';
import {ListUserComponent} from './modules/user/list-user/list-user.component';
import {NewUserComponent} from './modules/user/new-user/new-user.component';
import {NewSondageComponent} from './modules/sondage/new-sondage/new-sondage.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', loadChildren: './modules/user/user.module#UserModule'},
  {path: 'list-utilisateurs', component: ListUserComponent},
  {path: 'creer-utilisateur', component: NewUserComponent},
  {path: 'creer-sondage', component: NewSondageComponent}
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
