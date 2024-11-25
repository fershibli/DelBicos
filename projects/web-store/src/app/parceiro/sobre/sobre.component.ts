import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit {
  parceiro = {
    sobre: 'Aqui vai a descrição sobre o parceiro.',
    comodidades: 'Comodidades oferecidas pelo parceiro.',
    atendimento: 'Horário de atendimento do parceiro.',
    map: 'Localização do parceiro no mapa.',
    endereco: 'Endereço completo do parceiro.'
  };

  constructor() { }

  ngOnInit(): void {
  }
}