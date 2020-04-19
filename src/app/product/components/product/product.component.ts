import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product.model';

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

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
