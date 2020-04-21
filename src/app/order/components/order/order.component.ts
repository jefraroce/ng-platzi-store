import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart/cart.service';
import { map, reduce } from 'rxjs/operators';

interface OrderProduct extends Product {
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: OrderProduct[] = [];

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$
      .pipe(
        map((products) => {
          const groupedProducts: OrderProduct[] = [];

          products.forEach((product) => {
            const index = groupedProducts.findIndex((gp) => gp.id === product.id);

            if (index >= 0) {
              groupedProducts[index].quantity += 1
              groupedProducts[index].total += product.price
            } else {
              groupedProducts.push({
                ...product,
                quantity: 1,
                total: product.price
              });
            }
          })

          return groupedProducts;
        })
      )
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnInit(): void { }

}

var a = [
  {
    product: {
      id: '1',
      name: ''
    },
    quantity: 1,
    total: 1000
  },
  {
    product: {
      id: '1',
      name: ''
    },
    quantity: 2,
    total: 500
  }
]
