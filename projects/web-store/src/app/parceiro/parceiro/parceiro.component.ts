import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parceiro',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './parceiro.component.html',
  styleUrl: './parceiro.component.css'
})
export class ParceiroComponent {

  @Input() parceiro!: {
    nome: string;
    fotoUrl: string;
    categoria: string;
    avaliacao: number;
    numeroAvaliacoes: number;
    endereco: string;
    tags: string[];
  };

}