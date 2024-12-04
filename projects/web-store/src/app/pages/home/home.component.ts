import { Component } from '@angular/core';
import { BoxPesquisaComponent } from '../../box-pesquisa/box-pesquisa.component';
import { CategoriasComponent } from '../../categorias/categorias.component';
import { FooterComponent } from '../../footer/footer.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoxPesquisaComponent,
    CategoriasComponent,
    FooterComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
