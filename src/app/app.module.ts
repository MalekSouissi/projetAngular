import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import{SidebarModule} from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    NgModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
