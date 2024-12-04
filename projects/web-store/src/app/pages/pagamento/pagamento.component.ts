import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { FooterComponent } from '../../footer/footer.component';
import { BlueBarComponent } from '../../blue-bar/blue-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [
    CommonModule,
    HeaderLogonComponent,
    FooterComponent,
    BlueBarComponent,
    RouterModule,
  ],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css',
})
export class PagamentoComponent {
  servico = {
    titulo: 'Cílios fio-a-fio',
    id: 12475,
    status: 'Aguardando pagamento',
    preco: 50.0,
    qrcode: 'https://pngimg.com/uploads/qr_code/qr_code_PNG10.png',
    codigoPagamento: '00020126540014br.gov.bcb.pi',
  };

  copiarCodigo() {
    navigator.clipboard.writeText(this.servico.codigoPagamento).then(() => {
      alert('Código copiado com sucesso!');
    });
  }
}
