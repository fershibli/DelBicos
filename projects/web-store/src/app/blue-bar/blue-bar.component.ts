import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-bar',
  standalone: true,
  imports: [],
  templateUrl: './blue-bar.component.html',
  styleUrl: './blue-bar.component.css'
})
export class BlueBarComponent {
  @Input() titulo: any = ' ';
}
