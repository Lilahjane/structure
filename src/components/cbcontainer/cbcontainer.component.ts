import { Component } from '@angular/core';
import { CookbookComponent } from '../cookbook/cookbook.component';
import { FilterComponent } from '../filter/filter.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-cbcontainer',
  imports: [
    CookbookComponent,
    FilterComponent,
    PaginationComponent
  ],
  templateUrl: './cbcontainer.component.html',
  styleUrl: './cbcontainer.component.scss'
})
export class CbcontainerComponent {

}
