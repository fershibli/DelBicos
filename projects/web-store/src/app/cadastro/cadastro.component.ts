import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent  {
  cadastroForm: FormGroup;
  selectedOption: string = '';

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      genero: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      localizacao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      termos: [false, Validators.requiredTrue],
    });
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário válido:', this.cadastroForm.value);
    } else {
      console.log('Formulário inválido:', this.cadastroForm.controls);
    }
  }
}

