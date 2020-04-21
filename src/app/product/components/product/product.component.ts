import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product.model';

import { CartService } from '../../../services/cart/cart.service';

@Component({
  // Este selector se usa para hacer uso del componente en nuestro HTML
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  // Debemos especificar el tipo de dato que deseamos emitir, any deja abierta la posibilidad a cualquier tipo
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) { }

  addCart() {
    this.cartService.addCart(this.product);
  }
}
