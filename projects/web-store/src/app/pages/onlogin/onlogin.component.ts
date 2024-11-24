import { Component } from '@angular/core';
import { HeaderLogonComponent } from '../../header-logon/header-logon.component';
import { HeaderAloneComponent } from '../../header-alone/header-alone.component';
import { FooterComponent } from '../../footer/footer.component';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-onlogin',
  standalone: true,
  imports: [
    HeaderAloneComponent,
    FooterComponent,
    LoginComponent
  ],
  templateUrl: './onlogin.component.html',
  styleUrl: './onlogin.component.css'
})
export class OnloginComponent {

}
