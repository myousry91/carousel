import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideService } from '../provider/slide.service';
import { By } from '@angular/platform-browser';
import { ArrowsComponent } from '../arrow/arrow.component';
import { BulletComponent } from '../bullet/bullet.component';
import { SlideComponent } from '../slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slide } from '../provider/slide';
import Spy = jasmine.Spy;

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let slideService: SlideService;
  let spy: Spy;
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

    spy = spyOn(slideService, 'getSlides')
        .and.returnValue(Observable.of(slides).delay(10));

    de = fixture.debugElement.query(By.css('.carousel'));
    el = de.nativeElement;
  });

 
});
