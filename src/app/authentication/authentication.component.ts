import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { createAuthenticationResponse } from './createAuthenticationResponse';
import { CustomersService } from '../customers.service';
import { AuthenticationResponse } from './authenticationresponse';
import { Router } from '@angular/router';
import { createEmployeeResponse } from '../employees-page/createEmployeeResponse';

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

  loginFormData:{
    username: string;
    password: string;
  } = {
    username: "",
    password: ""
  };

  registerFormData:{
    username: string;
    password: string;
    confirmPassword: string;
  } = {
    username: "",
    password: "",
    confirmPassword: ""
  };
  username!: string
  authmessage!: string

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
    this.username=login.form.controls['username'].value
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

  onRegisterFormSubmit(registerForm:NgForm): void {
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    this.backendservice.createregister(registerForm.value).subscribe(
      (response:createAuthenticationResponse)=>{ 
        console.log("RegistrationResponse",response)
        alert(response.RESPONSEMESSAGE)
        if (response.result===true) {
          console.log("Registration successful")
          sessionStorage.setItem('user',this.username)
          sessionStorage.setItem('auth','Yes')
          this.router.navigate(['admin'])
        }
      },
      (error) => {
        console.error("Error in registration", error);
        alert("Error in registration");
      }
    );
  }
}
