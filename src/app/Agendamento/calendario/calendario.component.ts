import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-calendario',
  imports: [
    CommonModule,
  ],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  mesAtual: number;
  anoAtual: number;
  mesAtualNome: string;  
  diasDoMes: any[] = [];
  diaSelecionado: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {
    const dataAtual = new Date();
    this.mesAtual = dataAtual.getMonth();  
    this.anoAtual = dataAtual.getFullYear(); 
    this.mesAtualNome = this.getNomeMes(this.mesAtual); 
  }

  ngOnInit(): void {
    this.atualizarCalendario();
  }

  atualizarCalendario() {
    const primeiroDiaDoMes = new Date(this.anoAtual, this.mesAtual, 1);
    const ultimoDiaDoMes = new Date(this.anoAtual, this.mesAtual + 1, 0);
    const diasDoMes = [];

    for (let i = 0; i < primeiroDiaDoMes.getDay(); i++) {
      diasDoMes.push({ dia: '', vazio: true });
    }

    for (let i = 1; i <= ultimoDiaDoMes.getDate(); i++) {
      diasDoMes.push({ dia: i, selecionado: false });
    }

    this.diasDoMes = diasDoMes;
  }

  mudarMes(quantidade: number) {
    this.mesAtual += quantidade;
    if (this.mesAtual < 0) {
      this.mesAtual = 11;
      this.anoAtual--;
    } else if (this.mesAtual > 11) {
      this.mesAtual = 0;
      this.anoAtual++;
    }

    this.mesAtualNome = this.getNomeMes(this.mesAtual);
    this.atualizarCalendario();
    this.cdr.detectChanges();
  }

  getNomeMes(mes: number): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes];
  }

  selecionarDia(dia: any) {
    if (!dia.vazio) {
      this.diaSelecionado = dia.dia;
    }
  }
}
