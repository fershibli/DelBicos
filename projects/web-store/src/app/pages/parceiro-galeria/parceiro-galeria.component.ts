import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { ParceiroComponent } from '../../parceiro/parceiro/parceiro.component';
import { FooterComponent } from '../../footer/footer.component';
import { MenuComponent } from '../../parceiro/menu/menu.component';
import { GaleriaComponent } from '../../parceiro/galeria/galeria.component';
import { BlueBarComponent } from '../../blue-bar/blue-bar.component';

@Component({
  selector: 'app-parceiro-galeria',
  standalone: true,
  imports: [HeaderLogonComponent, ParceiroComponent, FooterComponent, MenuComponent, GaleriaComponent, BlueBarComponent],
  templateUrl: './parceiro-galeria.component.html',
  styleUrl: './parceiro-galeria.component.css'
})
export class ParceiroGaleriaComponent {
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
