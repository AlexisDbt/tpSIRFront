import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {NewReunionComponent} from './new-reunion/new-reunion.component';
import {ListReunionComponent} from './list-reunion/list-reunion.component';


const routes: Routes = [
  {path: 'new', component: NewReunionComponent},
  {path: 'list', component: ListReunionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ReunionRoutingModule { }
