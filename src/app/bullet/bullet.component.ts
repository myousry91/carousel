import { Component, Input } from '@angular/core';
import { Slide } from '../provider/slide';

@Component({
  selector: 'app-pins',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {
  @Input() selectedIndex: number;
  @Input() slides: Slide[];

  isActive(index: number): boolean {
    return (this.selectedIndex === index);
  }
}
