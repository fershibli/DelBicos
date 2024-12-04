import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../serviços/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    this.router.navigate(['/']);
  }
}
