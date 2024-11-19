import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  selectedOption: string | null = null;

  selectOption(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = null;  
    } else { 
      this.selectedOption = option;  
    }
  }
}

