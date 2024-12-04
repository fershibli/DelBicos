import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [],
  templateUrl: './profissionais.component.html',
  styleUrl: './profissionais.component.css'
})
export class ProfissionaisComponent {

  constructor(private router: Router) {}

  AbrirAtendimento(){
    this.router.navigate(['/administrador/analise/atendimento']);
  }
}
