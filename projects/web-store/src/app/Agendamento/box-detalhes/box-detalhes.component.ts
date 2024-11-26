import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './box-detalhes.component.html',
  styleUrl: './box-detalhes.component.css'
})
export class BoxDetalhesComponent{
  @Input() servico: any;
}