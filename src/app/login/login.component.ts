import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  onLogin() {
    // Demo credentials
    if (this.email === 'marah@test.com' && this.password === 'test') {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/admin']); // Redirect to admin page
    } else {
      this.loginError = true;
    }
  }
}