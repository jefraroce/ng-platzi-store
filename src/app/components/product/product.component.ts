import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  // Este selector se usa para hacer uso del componente en nuestro HTML
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  @Input() product: Product;
  // Debemos especificar el tipo de dato que deseamos emitir, any deja abierta la posibilidad a cualquier tipo
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
