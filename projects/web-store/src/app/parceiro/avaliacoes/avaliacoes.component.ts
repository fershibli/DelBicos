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
      foto: 'https://via.placeholder.com/50x50?text=João',
      nota: 4,
      data: '20 de Novembro, 2024'
    },
    {
      nome: 'Maria Oliveira',
      foto: 'https://via.placeholder.com/50x50?text=Maria',
      nota: 5,
      data: '18 de Novembro, 2024'
    },
    {
      nome: 'Carlos Souza',
      foto: 'https://via.placeholder.com/50x50?text=Carlos',
      nota: 3,
      data: '15 de Novembro, 2024'
    }
  ];

  estrelas: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }
}