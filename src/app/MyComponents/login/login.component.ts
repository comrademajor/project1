import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  signin()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.SignIn(this.email, this.password)
        .then(() => {
         this.router.navigate(['/menu'])
        }).catch(_error => {
          this.error = _error
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
  
}
