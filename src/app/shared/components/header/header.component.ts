import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  total: number = 0;

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$.subscribe((products) => {
      this.total = products.length;
    })
  }

  ngOnInit(): void {
  }

}
