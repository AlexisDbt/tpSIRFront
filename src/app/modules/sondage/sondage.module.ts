import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SondageRoutingModule } from './sondage-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SondageRoutingModule,
    RouterModule
  ]
})
export class SondageModule { }
