import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { createAuthenticationResponse } from './createAuthenticationResponse';
import { CustomersService } from '../customers.service';
import { AuthenticationResponse } from './authenticationresponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})



export class AuthenticationComponent {
  currentForm: 'login' | 'register' = 'login';
  public isUpdate=false;
  public authentication!: AuthenticationComponent;
  public authenticationresponse!: createAuthenticationResponse;
  // constructor(private backendservice:CustomersService) { }

  loginFormData:{
    username: string;
    password: string;
  } = {
    username: "",
    password: ""
  };

  registerFormData:{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  } = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  username!: string
  authmessage!: string
  // backendservice: any;

  constructor(private backendservice:CustomersService, private router: Router) {
    this.loginFormData = {
      username: '',
      password: ''
    };
  }

  switchForm(form: 'login' | 'register'): void {
    this.currentForm = form;
  }

  onLoginFormSubmit(): void {
    console.log("form data ==> ",this.loginFormData)
    // Handle login form submission logic
  }
  createlogin(login:NgForm):void { 
    // console.log("form data",login.value)
    // console.log("username",login.form.controls['username'].value)
    this.username=login.form.controls['username'].value
    // this.loginFormData=(loginFormData)login
    this.backendservice.createlogin(login.value).subscribe(
      (response:AuthenticationResponse)=>{ 
        console.log("LoginResponse",response)
        this.authmessage=response.message
        if (response.result===true) {
          console.log("Billy")
          sessionStorage.setItem('user',this.username)
            sessionStorage.setItem('auth','Yes')
            this.router.navigate(['admin'])
        }
      });
  }

  onRegisterFormSubmit(): void {
    console.log("form data ==> ",this.registerFormData)
    // Handle register form submission logic
  }
}