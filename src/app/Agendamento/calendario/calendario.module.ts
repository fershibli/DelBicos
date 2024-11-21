import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIcon, MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MatIconModule, 
    MatButtonModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
