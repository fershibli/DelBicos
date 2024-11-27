import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { BoxFiltrosComponent } from '../../Agendamento/box-filtros/box-filtros.component';
import { BoxProfissionaisComponent } from '../../Agendamento/box-profissionais/box-profissionais.component';
import { FooterComponent } from '../../footer/footer.component';
import { BlueBarComponent } from "../../blue-bar/blue-bar.component";

@Component({
  selector: 'app-pesquisa-2',
  standalone: true,
  imports: [
    HeaderLogonComponent,
    BoxFiltrosComponent,
    BoxProfissionaisComponent,
    FooterComponent,
    BlueBarComponent
],
  templateUrl: './pesquisa-2.component.html',
  styleUrl: './pesquisa-2.component.css'
})
export class Pesquisa2Component {

}
