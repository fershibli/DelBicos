import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  items: any[] = [
    {
      title: 'Serviços Domésticos',
      image: 'ServicosDomesticos.jpg',
    },
    {
      title: 'Reforma & Reparos',
      image: 'ReformasReparos.jpg',
    },
    {
      title: 'Serviços para Pets',
      image: 'ServicosPets.jpg',
    },
    {
      title: 'Bem-estar & Qualidade de Vida',
      image: 'BemEstarQualidadeVida.jpg',
    },
    {
      title: 'Beleza & Cosmética',
      image: 'BelezaCosmetica.jpg',
    },
  ];
}
