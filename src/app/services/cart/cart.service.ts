import { Injectable } from '@angular/core';

// Añade principios reactivos
import { BehaviorSubject } from 'rxjs';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    // Emitimos un evento de actualización a todos los
    // componentes subscritos a la lista de productos
    this.cart.next(this.products);
  }
}
