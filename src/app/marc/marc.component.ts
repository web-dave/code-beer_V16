import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CommonModule } from '@angular/common';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-marc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marc.component.html',
  styleUrls: ['./marc.component.scss'],
})
export class MarcComponent {
  foo = interval(1400)
    .pipe(
      tap((data) => console.log(data)),
      takeUntilDestroyed()
    )
    .subscribe();
}
