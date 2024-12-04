import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  constructor(private router: Router) {}

  AbrirAtendimento(){
    this.router.navigate(['/administrador/analise/chamado']);
  }
}
