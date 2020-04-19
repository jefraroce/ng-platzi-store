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

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.ProductsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('Product ID ', id);
  }
}
