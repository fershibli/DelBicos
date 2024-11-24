import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  titulosite = 'Extensões Fatec';
  menuusuario = false;
  isLoggedIn = false;
  userName = 'nome do usuário';
  isBrowser: boolean;

  constructor() {
    this.isBrowser =
      typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  ngOnInit() {
    if (this.isBrowser) {
      document.addEventListener('click', this.onDocumentClick.bind(this));
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.removeEventListener('click', this.onDocumentClick.bind(this));
    }
  }

  toggleMenu() {
    this.menuusuario = !this.menuusuario;
  }

  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuElement = document.querySelector('.menu-usuario');
    const userIconElement = document.querySelector('.icone-usuario');

    if (
      menuElement &&
      !menuElement.contains(target) &&
      userIconElement &&
      !userIconElement.contains(target)
    ) {
      this.menuusuario = false;
    }
  }

  mockLogin() {
    this.isLoggedIn = true;
    this.userName = 'José';
    this.menuusuario = false;
  }
  mockLogout() {
    this.isLoggedIn = false;
    this.userName = '';
    this.menuusuario = false;
  }
}
