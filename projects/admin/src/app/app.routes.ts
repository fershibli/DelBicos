import { Routes } from '@angular/router';
import { DashboardComponent } from './Administrador/dashboard/dashboard.component';
import { ClientesComponent } from './Administrador/gerenciamento/clientes/clientes.component';
import { ProfissionaisComponent } from './Administrador/gerenciamento/profissionais/profissionais.component';
import { ServicosComponent } from './Administrador/gerenciamento/servicos/servicos.component';
import { AtendimentoComponent } from './Administrador/analise/atendimento/atendimento.component';
import { ChamadoComponent } from './Administrador/analise/chamado/chamado.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'administrador/gerenciamento/clientes',
        component: ClientesComponent
    },
    {
        path: 'administrador/gerenciamento/profissionais',
        component: ProfissionaisComponent
    },
    {
        path: 'administrador/gerenciamento/servicos',
        component: ServicosComponent
    },
    {
        path: 'administrador/analise/atendimento',
        component: AtendimentoComponent
    },
    {
        path: 'administrador/analise/chamado',
        component: ChamadoComponent
    }

];
