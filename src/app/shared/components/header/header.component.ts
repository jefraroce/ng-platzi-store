import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from '../../../services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // El uso de Observable nos permite subscribirnos
  // a un valor de una manera mucho más eficiente.
  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  ngOnInit(): void { }

}
