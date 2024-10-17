import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const listaImagens = ['BelezaCosmetica.jpg', 'BemEstarQualidadeVida.jpg', 'ReformasReparos.jpg', 'ServicosDomesticos.jpg', 'ServicosPets.jpg']

@Component({
  selector: 'app-servicesgrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicesgrid.component.html',
  styleUrl: './servicesgrid.component.css',
})
export class ServicesgridComponent {
  itensVitrine = Array.from({ length: 30 }, (_, i) => {
    const randomPos = Math.floor(Math.random() * listaImagens.length);
    return {
      image: listaImagens[randomPos],
      title: `Profissional #${i + 1}`,
    };
  });
}
