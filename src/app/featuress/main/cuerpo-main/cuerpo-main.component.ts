import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuerpo-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuerpo-main.component.html',
  styleUrl: './cuerpo-main.component.css'
})
export class CuerpoMainComponent {
@Input() h2_1='';
@Input() h2_2='';
@Input() h2_3='';

}
