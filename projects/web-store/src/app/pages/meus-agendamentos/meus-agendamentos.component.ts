import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';
import { BoxServicesComponent } from '../../Agendamento/box-services/box-services.component';

@Component({
  selector: 'app-meus-agendamentos',
  standalone: true,
  imports: [ HeaderLogonComponent, FooterComponent, BoxServicesComponent ],
  templateUrl: './meus-agendamentos.component.html',
  styleUrl: './meus-agendamentos.component.css'
})
export class MeusAgendamentosComponent {

}
