import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import{SidebarModule} from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';

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
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
