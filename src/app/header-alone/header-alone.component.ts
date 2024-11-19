import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-header-alone',
  standalone: true,
  imports: [],
  templateUrl: './header-alone.component.html',
  styleUrl: './header-alone.component.css'
})
export class HeaderAloneComponent {
  @Input() titulo: string = 'Sou cliente!';
}
