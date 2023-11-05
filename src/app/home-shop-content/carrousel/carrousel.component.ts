import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Picture } from 'src/assets/Models/Picture'
// register Swiper custom elements
register();

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  pictures: Picture[] = [Picture.img1, Picture.img2, Picture.img3, Picture.img4, Picture.img5, Picture.img6];
}
