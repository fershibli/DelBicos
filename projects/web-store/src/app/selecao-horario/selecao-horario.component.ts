import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../header-logon/header-logon.component';
import { FooterComponent } from '../footer/footer.component';
import { CalendarioComponent } from '../Agendamento/calendario/calendario.component';

@Component({
  selector: 'app-selecao-horario',
  standalone: true,
  imports: [CommonModule, HeaderLogonComponent, FooterComponent, CalendarioComponent, ],
  templateUrl: './selecao-horario.component.html',
  styleUrl: './selecao-horario.component.css'
})
export class SelecaoHorarioComponent {

}
