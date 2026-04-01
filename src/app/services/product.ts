import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const API = "http://localhost:3000/";

export interface IProduct {
  id: number,
  name: string,
  price: number,
  description: string,
  quantity: number
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  /**
   * Fetches all products from the API.
   *
   * @returns an Observable containing an array of IProduct objects.
   */
  fetchProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API + "products")
  }
  /**
   * Deletes a product from the API.
   *
   * @param id The ID of the product to be deleted.
   * @returns An Observable containing the deleted product.
   */
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(API + "products/" + id)
  }

  createProduct(product:Omit<IProduct,'id'>){
    return this.http.post(API+ "products",product)
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(API + "products/" + id)
  }
  updateProduct ( id: number, product: Omit<IProduct,'id'>): Observable<IProduct> {
    return this.http.put<IProduct>(API + "products/" + id, product)
  }
}
