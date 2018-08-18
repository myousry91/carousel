import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideService } from '../provider/slide.service';
import { ArrowsComponent } from '../arrow/arrow.component';
import { BulletComponent } from '../bullet/bullet.component';
import { SlideComponent } from '../slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { Slide } from '../provider/slide';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let de: DebugElement;
  let slideService: SlideService;
  let slides:Slide[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselComponent,
        ArrowsComponent,
        BulletComponent,
        SlideComponent
      ],
      imports: [HttpClientModule],
      providers: [ SlideService ],
    });

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    slideService = fixture.debugElement.injector.get(SlideService);
  });

 
});
