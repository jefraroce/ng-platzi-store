import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';

import { Product } from '../../../models/product.model';

import { MyValidators } from '../../../utils/my-validators';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  isProcessing = false;
  previewImage$: Observable<any>;
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

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private angularFireStorage: AngularFireStorage
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
          this.snackBar.open('Felicidades tu producto ha sido creado.', 'cerrar');
          this.router.navigate(['/admin/products', newProduct.id, 'edit']);
        },
        (error) => {
          console.error('Error ', error);
          this.snackBar.open('No se ha podido crear el producto.', 'cerrar');
        });
  }

  updateProduct(product) {
    this.productsService.updateProduct(product.id, product)
      .subscribe(
        (updatedProduct) => {
          this.product = updatedProduct;
          this.snackBar.open('Felicidades tu producto ha sido actualizado.', 'cerrar');
        },
        (error) => {
          console.error('Error ', error);
          this.snackBar.open('No se ha podido actualizar el producto.', 'cerrar');
        });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    console.log('file ', file);

    // Ruta que usara en firebase para almacenar el archivo
    const path = `images/${file.name}`;
    const fileRef = this.angularFireStorage.ref(path);
    const task = this.angularFireStorage.upload(path, file);

    this.isProcessing = true;
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.previewImage$ = fileRef.getDownloadURL();
          this.previewImage$.toPromise()
            .then((imageUrl) => {
              this.productForm.get('image').setValue(imageUrl);
              this.isProcessing = false;
            })
            .catch((error) => {
              console.error('Error uploading image: ', error);
            });
        })
      )
      .subscribe();
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.product = Object.assign({}, this.product, this.productForm.value);

      if (this.product.id) {
        this.updateProduct(this.product);
      } else {
        this.product.id = this.generateRandomId();
        this.createProduct(this.product);
      }
    } else {
      this.snackBar.open('Debes completar todos los campos obligatorios.', 'cerrar');
    }
  }
}
