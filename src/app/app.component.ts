import { Component, Input } from '@angular/core';
import { Slide } from '../app/provider/slide';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss']
})
export class PinsComponent {
  @Input() selectedIndex: number;
  @Input() slides: Slide[];

  isActive(index: number): boolean {
    return (this.selectedIndex === index);
  }
}
