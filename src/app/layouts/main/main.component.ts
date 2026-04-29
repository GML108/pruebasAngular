import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TituloMainComponent } from './titulo-main/titulo-main.component';
import { CuerpoMainComponent } from './cuerpo-main/cuerpo-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TituloMainComponent, CuerpoMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
