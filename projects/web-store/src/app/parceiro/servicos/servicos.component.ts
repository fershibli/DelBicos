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
      foto: 'https://nucleocursos.com.br/blog/wp-content/uploads/2022/08/Curso-de-Alongamento-de-Cilios-em-Blumenau-Nucleo-Cursos-1024x657-1-1.jpg',
      titulo: 'Aplicação de Cílios fio-a-fio',
      key: 'Aplicação',
      preco: 50.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'https://estudioshine.com.br/wp-content/uploads/2024/03/Volume-brasileiro-1.png',
      titulo: 'Volume Brasileiro',
      key: 'Aplicação',
      preco: 36.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'https://gmcilios.com.br/wp-content/uploads/2024/03/DESIGN-DE-SOBRANCELHA-2.jpg',
      titulo: 'Design de Sobrancelha',
      key: 'Aplicação',
      preco: 70.00,
      status: 'Horários disponíveis'
    },
    {
      foto: 'https://i.redd.it/a-new-press-on-nail-design-i-made-and-my-unedited-hand-this-v0-npl26rwz553a1.jpg?width=2274&format=pjpg&auto=webp&s=bfe2f74d9a0f98ff2ba4e357ffe85698d4a1ee40',
      titulo: 'Nail Design ',
      key: 'Aplicação',
      preco: 70.00,
      status: 'Horários disponíveis'
    }
  ];
  ;
}