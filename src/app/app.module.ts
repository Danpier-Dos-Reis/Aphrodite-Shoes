import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeShopContentComponent } from './home-shop-content/home-shop-content.component';
import { CarrouselComponent } from './home-shop-content/carrousel/carrousel.component';
import { HomeAccessoriesContentComponent } from './home-accessories-content/home-accessories-content.component';
import { CarrouselaccesoriesComponent } from './home-accessories-content/carrouselaccesories/carrouselaccesories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeShopContentComponent,
    CarrouselComponent,
    HomeAccessoriesContentComponent,
    CarrouselaccesoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
