import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.fb.group({
    title: [null, Validators.required],
    image: [null, Validators.required],
    price: [null, Validators.required],
    description: null
  });

  images = [
    'assets/images/camiseta.png',
    'assets/images/hoodie.png',
    'assets/images/mug.png',
    'assets/images/pin.png',
    'assets/images/stickers1.png',
    'assets/images/stickers2.png'
  ];

  constructor(private fb: FormBuilder, private productsService: ProductsService, private _snackBar: MatSnackBar) { }

  generateRandomId(): string {
    return Math.ceil(Math.random() * 1000).toString()
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product = this.productForm.value;
      product.id = this.generateRandomId();
      console.log('Product ', product);
      this.productsService.createProduct(product)
        .subscribe(
          () => {
            this.productForm.reset();
            this._snackBar.open('Felicidades tu producto ha sido creado.');
          },
          (error) => {
            console.error('Error ', error);
            this._snackBar.open('No se ha podido crear el producto.');
          });
    } else {
      console.log(this.productForm)
      this._snackBar.open('Debes completar todos los campos obligatorios.');
    }
  }
}
