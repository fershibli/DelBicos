import { Component } from '@angular/core';
import { HeaderLogonComponent } from "../../header-logon/header-logon.component";
import { BoxFiltrosComponent } from "../box-filtros/box-filtros.component";
import { BoxProfissionaisComponent } from "../box-profissionais/box-profissionais.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderLogonComponent, BoxFiltrosComponent, BoxProfissionaisComponent, FooterComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

}
