import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideComponent } from './slide.component';
import { Slide } from '../provider/slide';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;
  let expectedSlide: Slide;
  let imageElement: DebugElement;
  let textContainerElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    imageElement = fixture.debugElement.query(By.css('img'));
    textContainerElement = fixture.debugElement.query(By.css('.text-container-inner'));

  });

  
});
