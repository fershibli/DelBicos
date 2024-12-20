import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';
import { FiltroPrimarioComponent } from '../../Agendamento/filtro-primario/filtro-primario.component';
import { BlueBarComponent } from "../../blue-bar/blue-bar.component";

@Component({
  selector: 'app-pesquisa-1',
  standalone: true,
  imports: [
    HeaderLogonComponent,
    FooterComponent,
    FiltroPrimarioComponent,
    BlueBarComponent
],
  templateUrl: './pesquisa-1.component.html',
  styleUrl: './pesquisa-1.component.css'
})
export class Pesquisa1Component {

}
