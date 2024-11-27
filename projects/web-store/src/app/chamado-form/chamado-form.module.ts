import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChamadoFormComponent } from './chamado-form.component';

@NgModule({
  declarations: [ChamadoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ChamadoFormComponent], 
})
export class ChamadoFormModule {}