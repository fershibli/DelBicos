import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {
  imagens: string[] = [
    'https://via.placeholder.com/300x200?text=Imagem+1',
    'https://via.placeholder.com/300x200?text=Imagem+2',
    'https://via.placeholder.com/300x200?text=Imagem+3',
    'https://via.placeholder.com/300x200?text=Imagem+4',
    'https://via.placeholder.com/300x200?text=Imagem+5',
    'https://via.placeholder.com/300x200?text=Imagem+6',
    'https://via.placeholder.com/300x200?text=Imagem+7',
    'https://via.placeholder.com/300x200?text=Imagem+8',
    'https://via.placeholder.com/300x200?text=Imagem+9'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}