import { Component } from '@angular/core';

@Component({
  selector: 'app-servicesgrid',
  standalone: true,
  imports: [],
  templateUrl: './servicesgrid.component.html',
  styleUrl: './servicesgrid.component.css',
})
export class ServicesgridComponent {
  itensVitrine = Array.from({ length: 30 }, (_, i) => ({
    imagem: `https://via.placeholder.com/150?text=Image+${i + 1}`,
    titulo: `Item ${i + 1}`,
  }));
}
