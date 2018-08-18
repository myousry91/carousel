import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './provider/data';

import { CarouselComponent } from './carousel/carousel.component';
import { ArrowsComponent } from './arrow/arrow.component';
import { BulletComponent } from './bullet/bullet.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ArrowsComponent,
    BulletComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [ CarouselComponent ]
})
export class AppModule { }
