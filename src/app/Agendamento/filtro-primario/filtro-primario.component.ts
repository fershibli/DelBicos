import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { EspecialidadeComponent } from '../especialidade/especialidade.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-primario',
  standalone: true,
  imports: [
    CalendarioComponent,
    EspecialidadeComponent,
    CommonModule
  ],
  templateUrl: './filtro-primario.component.html',
  styleUrl: './filtro-primario.component.css'
})
export class FiltroPrimarioComponent {

}
