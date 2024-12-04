import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { EspecialidadeComponent } from '../especialidade/especialidade.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filtro-primario',
  standalone: true,
  imports: [
    CalendarioComponent,
    EspecialidadeComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './filtro-primario.component.html',
  styleUrl: './filtro-primario.component.css',
})
export class FiltroPrimarioComponent {}
