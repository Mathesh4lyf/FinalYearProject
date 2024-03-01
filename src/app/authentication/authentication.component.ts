import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { createAuthenticationResponse } from './createAuthenticationResponse';
import { CustomersService } from '../customers.service';

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
  backendservice: any;

  constructor() {
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
    console.log("form data",login.value)
    this.backendservice.createlogin(login.value).subscribe(
      (response:createAuthenticationResponse)=>{ 
        console.log("LoginResponse",response)
      });
  }

  onRegisterFormSubmit(): void {
    console.log("form data ==> ",this.registerFormData)
    // Handle register form submission logic
  }
}