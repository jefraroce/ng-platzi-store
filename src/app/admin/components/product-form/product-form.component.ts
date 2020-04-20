import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../../models/product.model';

import { MyValidators } from '../../../utils/my-validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    id: null,
    title: null,
    image: null,
    price: null,
    description: null,
  };

  productForm = this.fb.group({
    title: [this.product.title, Validators.required],
    image: [this.product.image, Validators.required],
    price: [
      this.product.price,
      [
        Validators.required,
        MyValidators.isPriceValid
      ]
    ],
    description: this.product.description
  });

  images = [
    'assets/images/camiseta.png',
    'assets/images/hoodie.png',
    'assets/images/mug.png',
    'assets/images/pin.png',
    'assets/images/stickers1.png',
    'assets/images/stickers2.png'
  ];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      if (id) {
        this.fetchProduct(id);
      }
    });
  }

  generateRandomId(): string {
    return Math.ceil(Math.random() * 1000).toString();
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe((product) => {
        this.product = product;
        this.productForm.reset(this.product);
      });
  }

  createProduct(product) {
    this.productsService.createProduct(product)
      .subscribe(
        (newProduct) => {
          this.snackBar.open('Felicidades tu producto ha sido creado.');
          this.router.navigate(['/admin/products', newProduct.id, 'edit']);
        },
        (error) => {
          console.error('Error ', error);
          this.snackBar.open('No se ha podido crear el producto.');
        });
  }

  updateProduct(product) {
    this.productsService.updateProduct(product.id, product)
      .subscribe(
        (updatedProduct) => {
          this.product = updatedProduct;
          this.snackBar.open('Felicidades tu producto ha sido actualizado.');
        },
        (error) => {
          console.error('Error ', error);
          this.snackBar.open('No se ha podido actualizar el producto.');
        });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product = this.productForm.value;

      if (this.product.id) {
        product.id = this.product.id;
        this.updateProduct(product);
      } else {
        product.id = this.generateRandomId();
        this.createProduct(product);
      }
    } else {
      this.snackBar.open('Debes completar todos los campos obligatorios.');
    }
  }
}
