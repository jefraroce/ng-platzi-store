import { Component } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('Product ID ', id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }
}
