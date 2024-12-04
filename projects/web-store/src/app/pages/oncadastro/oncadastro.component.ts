import { Component } from '@angular/core';
import { HeaderAloneComponent } from '../../header-alone/header-alone.component';
import { FooterComponent } from '../../footer/footer.component';
import { CadastroComponent } from '../../cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oncadastro',
  standalone: true,
  imports: [
    HeaderAloneComponent,
    FooterComponent,
    CadastroComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './oncadastro.component.html',
  styleUrl: './oncadastro.component.css',
})
export class OncadastroComponent {}
