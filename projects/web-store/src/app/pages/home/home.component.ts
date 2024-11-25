import { Component } from '@angular/core';
import { BoxPesquisaComponent } from '../../box-pesquisa/box-pesquisa.component';
import { HeaderLogoutComponent } from "../../header-logout/header-logout.component";
import { CategoriasComponent } from '../../categorias/categorias.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxPesquisaComponent, HeaderLogoutComponent, CategoriasComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
