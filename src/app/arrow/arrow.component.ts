import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowsComponent {
  @Output('selectSlide') onNavigated = new EventEmitter<string>();

  navigate(direction: string) {
    this.onNavigated.emit(direction);
  }
}
