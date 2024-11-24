import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-horarios-disponiveis',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './box-horarios-disponiveis.component.html',
  styleUrl: './box-horarios-disponiveis.component.css'
})
export class BoxHorariosDisponiveisComponent {
  @Input() cliente = {
    data: '06 dez 2024'
  }
  horarios = [
    { hora: '08:00', disponivel: true },
    { hora: '09:00', disponivel: true },
    { hora: '10:00', disponivel: false },
    { hora: '11:00', disponivel: true },
    { hora: '12:00', disponivel: false },
    { hora: '13:00', disponivel: true },
    { hora: '14:00', disponivel: true },  
    { hora: '15:00', disponivel: false },
    { hora: '16:00', disponivel: true },
    { hora: '17:00', disponivel: true },
    { hora: '18:00', disponivel: false },
    { hora: '19:00', disponivel: true },
    
  ];

  horarioSelecionado: string | null = null;

  selecionarHorario(horario: string) {
    this.horarioSelecionado = horario;
    console.log('Horário selecionado:', horario);
  }

  pesquisar() {
    if (this.horarioSelecionado) {
      console.log('Pesquisando com horário:', this.horarioSelecionado);
    } else {
      console.log('Nenhum horário selecionado.');
    }
  }
}