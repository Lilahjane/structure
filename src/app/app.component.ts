import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from "../components/filter/filter.component";
import { NavComponent } from '../components/nav/nav.component';
@Component({
  selector: 'app-root',
  imports: [
    NavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'structure';
}
