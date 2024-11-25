import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParceiroComponent } from '../parceiro/parceiro.component';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, ParceiroComponent, MenuComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  produtos = [
    {
      foto: 'assets/services/01.png',
      titulo: 'Aplicação de Cílios fio-a-fio',
      key: 'Aplicação',
      preco: 50.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'assets/services/02.png',
      titulo: 'Volume Brasileiro',
      key: 'Aplicação',
      preco: 36.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'assets/services/03.png',
      titulo: 'Design de Sobrancelha',
      key: 'Aplicação',
      preco: 70.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'assets/services/04.png',
      titulo: 'Nail Design ',
      key: 'Aplicação',
      preco: 70.00,
      status: 'Horários disponíveis'
    }
  ];
  ;
}