import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TituloMainComponent } from './titulo-main/titulo-main.component';
import { CuerpoMainComponent } from './cuerpo-main/cuerpo-main.component';
import { ImgMainComponent } from './img-main/img-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TituloMainComponent, ImgMainComponent, CuerpoMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() styleLayout='';
  @Input() mainTitle: string = '';
  @Input() Title1: string = '';
  @Input() Title2: string = '';
  @Input() Title3: string = '';
  @Input() image: string = '';

}
