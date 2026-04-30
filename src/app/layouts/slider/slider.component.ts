import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {

  totSlides = 4;
  slideActual = 0;
  @ViewChild('slider') slider!: ElementRef;
  next() {

    if (this.slideActual != this.totSlides) {
      this.slideActual = this.slideActual + 1;
      this.slider.nativeElement.style.transform = 'translateX(-' + this.slideActual * 100 + '%)'
    }
  }

  prev() {
    if (this.slideActual != 0) {
      this.slideActual = this.slideActual - 1;
      this.slider.nativeElement.style.transform = 'translateX(-' + this.slideActual * 100 + '%)'
    }
  }
}


