import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-wassim',
  standalone: true,
  imports: [CommonModule],
  template: `Wassim will {{ drink }}
    <hr />
    {{ events$ | async }}`,
  styleUrls: ['./wassim.component.scss'],
})
export class WassimComponent {
  @Input() drink!: string;
  @Input() food!: string;

  private params = inject(ActivatedRoute).snapshot.params;

  events$ = timer(2000);
  // constructor(private route: bar){}
}
