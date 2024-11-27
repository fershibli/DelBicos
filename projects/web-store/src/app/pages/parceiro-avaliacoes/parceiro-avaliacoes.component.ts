import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';
import { MenuComponent } from '../../parceiro/menu/menu.component';
import { AvaliacoesComponent } from '../../parceiro/avaliacoes/avaliacoes.component';
import { ParceiroComponent } from '../../parceiro/parceiro/parceiro.component';
import { BlueBarComponent } from '../../blue-bar/blue-bar.component';

@Component({
  selector: 'app-parceiro-avaliacoes',
  standalone: true,
  imports: [ HeaderLogonComponent, FooterComponent, MenuComponent, AvaliacoesComponent, ParceiroComponent, BlueBarComponent],
  templateUrl: './parceiro-avaliacoes.component.html',
  styleUrl: './parceiro-avaliacoes.component.css'
})
export class ParceiroAvaliacoesComponent {
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
