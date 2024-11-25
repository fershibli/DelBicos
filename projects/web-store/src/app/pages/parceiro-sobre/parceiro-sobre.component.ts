import { Component } from '@angular/core';
import { HeaderLogonComponent } from "../../header-logon/header-logon.component";
import { SobreComponent } from "../../parceiro/sobre/sobre.component";
import { FooterComponent } from "../../footer/footer.component";
import { MenuComponent } from '../../parceiro/menu/menu.component';
import { ParceiroComponent } from '../../parceiro/parceiro/parceiro.component';

@Component({
  selector: 'app-parceiro-sobre',
  standalone: true,
  imports: [HeaderLogonComponent, SobreComponent, FooterComponent, MenuComponent, ParceiroComponent],
  templateUrl: './parceiro-sobre.component.html',
  styleUrl: './parceiro-sobre.component.css'
})
export class ParceiroSobreComponent {
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
