import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ServicesgridComponent } from '../servicesgrid/servicesgrid.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ServicesgridComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
