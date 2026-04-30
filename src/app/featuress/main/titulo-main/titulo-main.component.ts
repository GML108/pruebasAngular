import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-titulo-main',
    standalone:true,
    imports: [CommonModule],
    templateUrl: './titulo-main.component.html',
    styleUrl: './titulo-main.component.css'
})
export class TituloMainComponent {
@Input() title='';

}
