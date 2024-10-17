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
      bottom: '300px',
    },
    {
      title: 'Reforma & Reparos',
      image: 'ReformasReparos.jpg',
    },
    {
      title: 'Serviços para Pets',
      image: 'ServicosPets.jpg',
      bottom: '550px',
    },
    {
      title: 'Bem-estar & Qualidade de Vida',
      image: 'BemEstarQualidadeVida.jpg',
      bottom: '290px',
    },
    {
      title: 'Beleza & Cosmética',
      image: 'BelezaCosmetica.jpg',
      bottom: '300px',
    },
  ];
}
