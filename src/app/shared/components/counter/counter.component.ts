import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() step = 1;
  @Input() max = 100;
  @Input() min = 0;
  @Output() changed = new EventEmitter<number>();
  value = 0;

  constructor() { }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      if (this.value > this.max) {
        this.value = this.max;
      }
      this.changed.emit(this.value);
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.changed.emit(this.value);
    }
  }
}
