import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-services.component.html',
  styleUrl: './box-services.component.css'
})
export class BoxServicesComponent implements OnInit {
  servico = {
    nome: 'Cílios fio-a-fio',
    parceiro: 'Sol Hammer',
    endereco: 'Av. Barão de tatuí, 298',
    dia: '06',
    mes: 'Dezembro',
    horario: '11h00',
    imagem: 'assets/01.png',  
  };

  constructor() { }

  ngOnInit(): void { }
}