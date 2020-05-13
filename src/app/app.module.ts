import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './modules/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ListUserComponent} from './modules/user/list-user/list-user.component';
import {AccueilUserComponent} from './modules/user/accueil-user/accueil-user.component';
import {NewUserComponent} from './modules/user/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListUserComponent,
    AccueilUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
