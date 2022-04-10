import { AuthenticationService } from './services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  { 
  
  

  public title ="comradefrontend";
  constructor(
  public authService:AuthenticationService
  ){
  }
 
  email!: string;
  password!: string;
 
  signUp() {
  this.authService.SignUp(this.email, this.password);
  this.email = '';
  this.password = '';
  }
 
  signIn() {
  this.authService.SignIn(this.email, this.password);
  this.email = '';
  this.password = '';
  }
 
  signOut() {
  this.authService.SignOut();
  }

}
  

