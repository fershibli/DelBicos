import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chamado-form',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './chamado-form.component.html',
  styleUrl: './chamado-form.component.css'
})
export class ChamadoFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Chamado criado:', form.value);
      alert('Chamado criado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}