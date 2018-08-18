import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowsComponent } from './arrow.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ArrowsComponent', () => {
  let component: ArrowsComponent;
  let fixture: ComponentFixture<ArrowsComponent>;
  let leftArrowElement: DebugElement;
  let rightArrowElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsComponent);
    component = fixture.componentInstance;
    leftArrowElement = fixture.debugElement.query(By.css('.arrow-left'));
    rightArrowElement = fixture.debugElement.query(By.css('.arrow-right'));
    fixture.detectChanges();
  });

});
