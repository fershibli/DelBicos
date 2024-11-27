import { Component } from '@angular/core';
import { BoxDetalhesComponent } from '../../Agendamento/box-detalhes/box-detalhes.component';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-agendamento-detalhes',
  standalone: true,
  imports: [BoxDetalhesComponent, HeaderLogonComponent, FooterComponent],
  templateUrl: './agendamento-detalhes.component.html',
  styleUrl: './agendamento-detalhes.component.css'
})
export class AgendamentoDetalhesComponent {
  servico = {
    nome: 'Cílios fio-a-fio',
    id: 1245,
    dataAgendamento: '29 de novembro de 2024',
    profissional: 'Sol Hammer',
    endereco: 'Av Barão de tatui, 320',
    valor: 50.00,
    pagamento: 'PIX',
    diaAgendado: '06 de dezembro de 2024',
    horarioAgendado: '11h00',
    imagem: 'https://cdn.shopify.com/s/files/1/0025/1350/2326/files/alongamento-de-cilios-fio-a-fio-como-fazer-blog-amorope-deia-federici-foto-1_2048x2048.jpg?v=1640031372',
  };
}