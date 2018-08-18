import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BulletComponent } from './bullet.component';
import { DebugElement } from '@angular/core';
import { Slide } from '../provider/slide';
import { By } from '@angular/platform-browser';

describe('PinsComponent', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;
  let pinsElements: DebugElement[];
  let slide1: Slide;
  let slide2: Slide;
  let slides: Slide[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;

    slide1 = new Slide();
    slide1.title = 'KLM';
    slide1.text = 'Vliegtuig';
    slide1.image = 'boeing.png';

    slide2 = new Slide();
    slide2.title = 'Air France';
    slide2.text = 'Fokker';
    slide2.image = 'kist.png';

    slides = [
      slide1,
      slide2
    ];

    component.slides = slides;
    component.selectedIndex = 0;
    fixture.detectChanges();
  });

});
