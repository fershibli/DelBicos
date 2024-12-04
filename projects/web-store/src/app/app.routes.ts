/*
em ./pages
 home                    onlogin                 parceiro-galeria        pesquisa-1
agendamento-detalhes    meus-agendamentos       pagamento               parceiro-servicos       pesquisa-2
confirma-data           oncadastro              parceiro-avaliacoes     parceiro-sobre          relatar-problema
*/
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OnloginComponent } from './pages/onlogin/onlogin.component';
import { ParceiroGaleriaComponent } from './pages/parceiro-galeria/parceiro-galeria.component';
import { Pesquisa1Component } from './pages/pesquisa-1/pesquisa-1.component';
import { AgendamentoDetalhesComponent } from './pages/agendamento-detalhes/agendamento-detalhes.component';
import { MeusAgendamentosComponent } from './pages/meus-agendamentos/meus-agendamentos.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ParceiroServicosComponent } from './pages/parceiro-servicos/parceiro-servicos.component';
import { Pesquisa2Component } from './pages/pesquisa-2/pesquisa-2.component';
import { ConfirmaDataComponent } from './pages/confirma-data/confirma-data.component';
import { OncadastroComponent } from './pages/oncadastro/oncadastro.component';
import { ParceiroAvaliacoesComponent } from './pages/parceiro-avaliacoes/parceiro-avaliacoes.component';
import { ParceiroSobreComponent } from './pages/parceiro-sobre/parceiro-sobre.component';
import { RelatarProblemaComponent } from './pages/relatar-problema/relatar-problema.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: OnloginComponent },
  { path: 'parceiro-galeria', component: ParceiroGaleriaComponent },
  { path: 'pesquisa-1', component: Pesquisa1Component },
  { path: 'agendamento-detalhes', component: AgendamentoDetalhesComponent },
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'parceiro-servicos', component: ParceiroServicosComponent },
  { path: 'pesquisa-2', component: Pesquisa2Component },
  { path: 'confirma-data', component: ConfirmaDataComponent },
  { path: 'cadastro', component: OncadastroComponent },
  { path: 'parceiro-avaliacoes', component: ParceiroAvaliacoesComponent },
  { path: 'parceiro-sobre', component: ParceiroSobreComponent },
  { path: 'relatar-problema', component: RelatarProblemaComponent },
];
