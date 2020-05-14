import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewSondageComponent} from './new-sondage/new-sondage.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: 'new', component: NewSondageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class SondageRoutingModule { }
