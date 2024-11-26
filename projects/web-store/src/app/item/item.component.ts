import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() produto!: { 
    imagem: string; 
    titulo: string; 
    parceiro: string; 
    descricao: string; 
    valor: number; 
  };
}