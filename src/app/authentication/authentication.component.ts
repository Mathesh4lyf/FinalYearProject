import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  currentForm: 'login' | 'register' = 'login';

  switchForm(form: 'login' | 'register'): void {
    this.currentForm = form;
  }

  onLoginFormSubmit(): void {
    // Handle login form submission logic
  }

  onRegisterFormSubmit(): void {
    // Handle register form submission logic
  }
}