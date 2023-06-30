import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-melanie',
  standalone: true,
  imports: [CommonModule],
  template: `{{ foo() }}
    <h3>Melanie sagt bitte noch {{ matthias() }} Kugeln Eis!</h3>`,
  styleUrls: [],
})
export class MelanieComponent {
  matthias = signal(46);
  foo = computed(() => this.matthias() * 0.5);

  falko = 112;
  bar = this.falko * 0.5;
  constructor() {
    setTimeout(() => {
      this.matthias.set(47);
      this.falko = 113;
    }, 3000);
  }
}
