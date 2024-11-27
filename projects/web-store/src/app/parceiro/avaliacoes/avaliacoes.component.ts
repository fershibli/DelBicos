import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './avaliacoes.component.html',
  styleUrl: './avaliacoes.component.css'
})
export class AvaliacoesComponent implements OnInit {
  avaliacoes = [
    {
      nome: 'João Silva',
      foto: 'https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg',
      nota: 4,
      data: '20 de Novembro, 2024'
    },
    {
      nome: 'Maria Oliveira',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrgjY4tx9hGDgaF9yFRr1UuX2rIcz2F8w-Q&s',
      nota: 5,
      data: '18 de Novembro, 2024'
    },
    {
      nome: 'Carlos Souza',
      foto: 'https://www.agendartecultura.com.br/wp-content/uploads/2022/12/meneson.jpg',
      nota: 3,
      data: '15 de Novembro, 2024'
    }
  ];

  estrelas: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }
}