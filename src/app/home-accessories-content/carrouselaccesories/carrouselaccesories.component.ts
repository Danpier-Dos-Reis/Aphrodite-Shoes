import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Image } from 'src/assets/Models/Image'
// register Swiper custom elements
register();

@Component({
  selector: 'app-carrouselaccesories',
  templateUrl: './carrouselaccesories.component.html',
  styleUrls: ['./carrouselaccesories.component.scss']
})
export class CarrouselaccesoriesComponent {
  pictures:Image[] = [Image.img1,Image.img2,Image.img3,Image.img4,Image.img5,Image.img6];
}
