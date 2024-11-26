import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-horarios-free',
  standalone: true,
  imports: [],
  templateUrl: './horarios-free.component.html',
  styleUrl: './horarios-free.component.css'
})
export class HorariosFreeComponent {
  @Input() horarios: { horario: string; disponivel: boolean }[] = [];
  @Output() horarioSelecionadoChange = new EventEmitter<string>();

  horariosDisponiveis: string[] = [];
  horarioSelecionado: string | null = null;

  ngOnChanges() {
    this.horariosDisponiveis = this.horarios
      .filter(h => h.disponivel)
      .map(h => h.horario);
  }

  selecionarHorario(horario: string) {
    this.horarioSelecionado = horario;
    this.horarioSelecionadoChange.emit(horario);
  }
}