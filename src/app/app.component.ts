import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display:boolean = false;

  displayAnimation(){
    this.display = !this.display;
  }
  hideAnimation(){
    this.display = !this.display;
  }
}
