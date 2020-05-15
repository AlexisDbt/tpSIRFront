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
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NewSondageComponent} from './modules/sondage/new-sondage/new-sondage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {NewReunionComponent} from './modules/reunion/new-reunion/new-reunion.component';
import {ListReunionComponent} from './modules/reunion/list-reunion/list-reunion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListUserComponent,
    AccueilUserComponent,
    NewUserComponent,
    NewSondageComponent,
    NewReunionComponent,
    ListReunionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
