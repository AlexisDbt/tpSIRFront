import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunionRoutingModule } from './reunion-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReunionRoutingModule,
    RouterModule
  ],
})
export class ReunionModule { }
