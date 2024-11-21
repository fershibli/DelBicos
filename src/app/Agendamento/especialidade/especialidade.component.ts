import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-especialidade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.css']
})
export class EspecialidadeComponent {
  especialidades = [
    { nome: 'Cabeleireiro', selected: false },
    { nome: 'Manicure', selected: false },
    { nome: 'Pedicure', selected: false },
    { nome: 'Maquiagem', selected: false },
    { nome: 'Depilação', selected: false },
    { nome: 'Barbeiro', selected: false },
    { nome: 'Esteticista', selected: false },
  ];

  selecionarEspecialidade(especialidade: any) {
    // Limpa a seleção anterior
    this.especialidades.forEach(es => es.selected = false);
    // Marca a especialidade clicada
    especialidade.selected = true;
  }
}
