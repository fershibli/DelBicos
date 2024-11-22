import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-filtros',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './box-filtros.component.html',
  styleUrl: './box-filtros.component.css'
})
export class BoxFiltrosComponent {
  categorias: string[] = [
    'Beleza e estética',
    'Serviços domésticos',
    'Serviços gerais',
    'Reformas e reparos',
    'Saúde',
    'Pets',
    'Eventos'
  ];

  profissionaisMap: { [key: string]: string[] } = {
    'Beleza e estética': ['Cabeleireiro', 'Manicure', 'Maquiagem', 'Depilação', 'Pedicure', 'Barbeiro', 'Esteticista'],
    'Serviços domésticos': ['Diarista', 'Passaeira', 'Lavadeira', 'Cozinheira'],
    'Serviços gerais': ['Corte e costura', 'Sapateiro', 'Desentupidor', 'Mudanças e carreto', 'Jardineiro'],
    'Reformas e reparos': ['Encanador', 'Eletricista', 'Vidraceiro', 'Marido de aluguel', 'Técnico de gás'],
    'Saúde': ['Enfermeiro', 'Psicólogo', 'Cuidador de idoso', 'Terapeuta ocupacional'],
    'Pets': ['Pet Sitter', 'Dog Walker', 'Veterinário', 'Creche e Hotel'],
    'Eventos': ['Fotógrafo', 'DJ', 'Buffet']
  };

  profissionais: string[] = [];
  selectedCategoria: string = '';
  selectedProfissional: string = '';
  selectedEspecialidade: string = '';
  selectedDate: string = '';

  onCategoriaChange() {
    this.profissionais = this.profissionaisMap[this.selectedCategoria] || [];
    this.selectedProfissional = ''; 
  }

  pesquisar() {
    console.log('Categoria:', this.selectedCategoria);
    console.log('Profissional:', this.selectedProfissional);
    console.log('Especialidade:', this.selectedEspecialidade);
    console.log('Data:', this.selectedDate);
  }
}