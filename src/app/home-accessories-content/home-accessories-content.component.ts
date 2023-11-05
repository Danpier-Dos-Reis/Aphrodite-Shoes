import { Component } from '@angular/core';
import { Image } from 'src/assets/Models/Image'
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home-accessories-content',
  templateUrl: './home-accessories-content.component.html',
  styleUrls: ['./home-accessories-content.component.scss']
})
export class HomeAccessoriesContentComponent {
  pictures:Image[] = [Image.img1,Image.img2,Image.img3,Image.img4,Image.img5,Image.img6];
}
