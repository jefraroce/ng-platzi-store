import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductListDataSource } from './product-list-datasource';
import { Product } from '../../../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductListDataSource;

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image', 'title', 'description', 'price', 'actions'];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.setDataSource(products);
      });
  }

  setDataSource(products) {
    this.dataSource = new ProductListDataSource(products);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteProduct(id: string) {
    if (confirm('¿Esta usted seguro?')) {
      this.productsService.deleteProduct(id)
        .subscribe(() => {
          const productIndex = this.dataSource.data.findIndex((product) => {
            return product.id === id;
          });

          if (productIndex >= 0) {
            this.dataSource.data.splice(productIndex, 1);
            this.setDataSource(this.dataSource.data);
            this.snackBar.open('Genial el producto ha sido eliminado.', 'cerrar');
          }
        },
          (error) => {
            console.error('Error deleting product ', error);
            this.snackBar.open('No se ha podido eliminar el producto.', 'cerrar');
          });
    }
  }
}
