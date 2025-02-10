import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

export interface Cards {
  name: string;
  value: string;
  itemname: string;
  filter1: number;
  filter2: number;
  filter3: number;
}

@Component({
  selector: 'app-cookbook',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookbookComponent {
  public Cards: Cards[] = [
    { name: 'item 1', value: 'not spicy', itemname: 'pizza', filter1: 12, filter2: 35, filter3: 7 },
    { name: 'item 2', value: 'spicy', itemname: 'taco', filter1: 3, filter2: 22, filter3: 44 },
    { name: 'item 3', value: 'not spicy', itemname: 'pasta', filter1: 18, filter2: 29, filter3: 47 },
    { name: 'item 4', value: 'spicy', itemname: 'burger', filter1: 8, filter2: 41, filter3: 33 },
    { name: 'item 5', value: 'mildly spicy', itemname: 'sushi', filter1: 25, filter2: 13, filter3: 39 },
    { name: 'item 6', value: 'spicy', itemname: 'curry', filter1: 31, filter2: 10, filter3: 48 },
    { name: 'item 7', value: 'not spicy', itemname: 'sandwich', filter1: 4, filter2: 19, filter3: 21 },
    { name: 'item 8', value: 'mildly spicy', itemname: 'noodles', filter1: 37, filter2: 50, filter3: 2 },
    { name: 'item 9', value: 'not spicy', itemname: 'salad', filter1: 28, filter2: 11, filter3: 40 },
    { name: 'item 10', value: 'spicy', itemname: 'chicken wings', filter1: 15, filter2: 45, filter3: 6 },
    { name: 'item 11', value: 'mildly spicy', itemname: 'ramen', filter1: 20, filter2: 24, filter3: 42 },
    { name: 'item 12', value: 'not spicy', itemname: 'steak', filter1: 5, filter2: 38, filter3: 30 }
  ];
}
