import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent {
  currentForm: 'login' | 'register' = 'login';
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

  onRegisterFormSubmit(): void {
    console.log("form data ==> ",this.registerFormData)
    // Handle register form submission logic
  }
}