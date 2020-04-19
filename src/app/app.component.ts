import { Component } from '@angular/core';

import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  products = products;

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(productId: number) {
    console.log('Product ID ', productId);
  }
}
