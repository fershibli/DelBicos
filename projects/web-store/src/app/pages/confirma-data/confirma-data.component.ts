import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemComponent } from '../../item/item.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { BlueBarComponent } from '../../blue-bar/blue-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirma-data',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
    FooterComponent,
    HeaderLogonComponent,
    BlueBarComponent,
    RouterModule,
  ],
  templateUrl: './confirma-data.component.html',
  styleUrl: './confirma-data.component.css',
})
export class ConfirmaDataComponent {
  produtos = [
    {
      imagem:
        'https://cdn.shopify.com/s/files/1/0025/1350/2326/files/alongamento-de-cilios-fio-a-fio-como-fazer-blog-amorope-deia-federici-foto-1_2048x2048.jpg?v=1640031372',
      titulo: 'Cílios fio-a-fio',
      parceiro: 'Sol Hammer',
      descricao: 'Aplicação com alta qualidade',
      valor: 50.0,
    },
  ];
  servico = {
    data: 'Sexta-feira, 6 de dezembro de 2024',
    horas: '11h00',
    parceiro: 'Sol Hammer',
    endereco: 'Rua com. Hermelino Matarazzo, 298',
  };

  constructor() {}

  ngOnInit(): void {}
}
