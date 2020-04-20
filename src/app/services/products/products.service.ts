import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.urlApi}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.urlApi}/products`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`);
  }

  /**
   * Actualiza los valores de un producto.
   * NOTE: Partial nos permite enviar solo los valores que se han cambio.
   *
   * @param id String Id del producto a actualizar.
   * @param changes Partial cambios a aplicar al producto.
   */
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.urlApi}/products/${id}`, changes);
  }
}
