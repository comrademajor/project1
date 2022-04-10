import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor( private authService:AuthenticationService , private router:Router) { 
  }
  email: string ="";
  password: string="";
  repassword:string="";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  ngOnInit(): void {
  }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  signup()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authService.SignUp(this.email, this.password)
        .then((): void => {
          console.log(this.email,this.password)
          this.message = "you are register with data on firbase"
          this.router.navigate(['/login'])
          //this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
  
        })
    }
  }

  validateForm(email, password)
  {
    if(email.length === 0)
    {
      this.errorMessage = "Please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please enter password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "Password should be at least 6 character";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}