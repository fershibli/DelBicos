import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const listaImagens = ['BelezaCosmetica.jpg', 'BemEstarQualidadeVida.jpg', 'ReformasReparos.jpg', 'ServicosDomesticos.jpg', 'ServicosPets.jpg'];

declare var bootstrap: any;

@Component({
  selector: 'app-servicesgrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicesgrid.component.html',
  styleUrls: ['./servicesgrid.component.css'],
})
export class ServicesgridComponent {
  selectedItem: number | null = null;

  openModal(item: number) {
    try {
      console.log('openModal chamado com índice:', item);
      this.selectedItem = item;
      const modalElement = document.getElementById('itemModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    } catch (error) {
      console.error('Erro ao abrir modal:', error);
    }
  }

  itensVitrine = Array.from({ length: 30 }, (_, i) => {
    const randomPos = Math.floor(Math.random() * listaImagens.length);
    return {
      image: listaImagens[randomPos],
      title: `Profissional #${i + 1}`,
    };
  });
}
