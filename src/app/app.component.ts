import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MircoComponent } from './mirco/mirco.component';
import { MarcComponent } from './marc/marc.component';
import { MelanieComponent } from './melanie/melanie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    MircoComponent,
    MarcComponent,
    MelanieComponent,
  ],
})
export class AppComponent {
  title = 'v16';
  show = true;
}
