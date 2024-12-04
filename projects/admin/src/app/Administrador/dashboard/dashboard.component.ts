import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from '../gerenciamento/clientes/clientes.component';
import { ServicosComponent } from '../gerenciamento/servicos/servicos.component';
import { ProfissionaisComponent } from '../gerenciamento/profissionais/profissionais.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ClientesComponent,
    ServicosComponent,
    ProfissionaisComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  visiblePageNumber = 0;

  setVisiblePage(page: number){
    this.visiblePageNumber = page;
  }
}
