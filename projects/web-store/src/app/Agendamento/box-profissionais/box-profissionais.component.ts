import { Component, Input } from '@angular/core';
import { BoxHorariosDisponiveisComponent } from '../box-horarios-disponiveis/box-horarios-disponiveis.component';

@Component({
  selector: 'app-box-profissionais',
  standalone: true,
  imports: [BoxHorariosDisponiveisComponent],
  templateUrl: './box-profissionais.component.html',
  styleUrl: './box-profissionais.component.css'
})
export class BoxProfissionaisComponent {
  @Input() profissional = {
    nome: 'Jefferson Santos',
    avaliacaoText: 'Muito bom',
    nota: 4.4,
    numeroAvaliacoes: 12,
    foto: 'https://i.pinimg.com/736x/b1/aa/73/b1aa73786a14bf19fb208dfbf90488e5.jpg',
    categoria: 'Cabeleireiro, Barbeiro',
    endereco: 'Rua Com. Hermelino Matarazzo, 298',  
    servico: 'Corte, Barba, Degradê, Social, Degradê navalhado',
    precoMin: 25.00
  };
}
