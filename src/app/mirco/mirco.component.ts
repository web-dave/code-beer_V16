import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mirco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mirco.component.html',
  styleUrls: ['./mirco.component.scss'],
})
export class MircoComponent {
  @Input({ required: true }) game: string = '';
}
