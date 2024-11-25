import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';
import { ParceiroComponent } from '../../parceiro/parceiro/parceiro.component';
import { ServicosComponent } from '../../parceiro/servicos/servicos.component';
import { MenuComponent } from "../../parceiro/menu/menu.component";

@Component({
  selector: 'app-parceiro-servicos',
  standalone: true,
  imports: [HeaderLogonComponent, FooterComponent, ParceiroComponent, ServicosComponent, MenuComponent],
  templateUrl: './parceiro-servicos.component.html',
  styleUrl: './parceiro-servicos.component.css'
})
export class ParceiroServicosComponent {
  parceiroData = {
    nome: 'Solange Hammer',
    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET_cZIlzK0d8ig_gfQEsx4wkBNf4M1IqIIA&s',
    categoria: 'Beleza e estética',
    avaliacao: 4.3,
    numeroAvaliacoes: 120,
    endereco: 'Av. Barão de Tatuí, 320 - Jardim Vergueiro, Sorocaba - SP',
    tags: ['Atende em seu endereço', 'Requer agendamento' ]
  };

}
