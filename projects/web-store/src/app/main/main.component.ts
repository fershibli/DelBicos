import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderLogonComponent } from '../header-logon/header-logon.component';
import { HeaderLogoutComponent } from '../header-logout/header-logout.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../serviços/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    RouterModule,
    HeaderLogonComponent,
    HeaderLogoutComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (status: boolean) => (this.isLoggedIn = status)
    );
  }
}
