import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../header-logon/header-logon.component';
import { CalendarioComponent } from '../Agendamento/calendario/calendario.component';
import { HorariosFreeComponent } from '../horarios-free/horarios-free.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-selecao-horario',
  standalone: true,
  imports: [CommonModule, HeaderLogonComponent, CalendarioComponent, HorariosFreeComponent, ItemComponent ],
  templateUrl: './selecao-horario.component.html',
  styleUrl: './selecao-horario.component.css'
})
export class SelecaoHorarioComponent {
  produtos = [
    {
      imagem: '04.png',
      titulo: 'Cílios fio-a-fio',
      parceiro: 'Sol Hammer',
      descricao: 'Aplicação com alta qualidade',
      valor: 50.0
    },
  ];
  horariosParceiro = [
    { horario: '08:00', disponivel: true },
    { horario: '09:00', disponivel: false },
    { horario: '10:00', disponivel: true },
    { horario: '11:00', disponivel: true },
    { horario: '13:00', disponivel: false },
    { horario: '14:00', disponivel: true },
  ];
  onHorarioSelecionado(horario: string) {
    console.log('Horário selecionado:', horario);
  };
}
