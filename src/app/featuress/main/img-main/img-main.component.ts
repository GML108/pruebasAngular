import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-img-main',
            standalone:true,

    imports: [CommonModule],
    templateUrl: './img-main.component.html',
    styleUrl: './img-main.component.css'
})
export class ImgMainComponent {

@Input() imgSrc='';
@Input() imgAlt='';

}
