import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'


  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(sort: string): Observable<IProduct[]> {
    let params = sort  ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }

  // Get a single product by its id
  public getProductById(id: number): Observable<IProduct> {
    const url = `${this.baseURL}/${id}`;
    return this._httpClient.get<IProduct>(url);
  }

  //post  request to add new product
  public postNewProduct(newProduct: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(this.baseURL, newProduct);
  }

  //hacer un put de un producto  para actualizarlo
  public updateProduct(id:number , updatedProduct: IProduct):Observable<IProduct>{
      const url= `${this.baseURL}/${id}`;
      return this._httpClient.put<IProduct>(url,updatedProduct);
  }

  //borrar  el producto con este id
  public deleteProduct(id:number): Observable<IProduct>{
    const url=`${this.baseURL}/${id}`;
    return this._httpClient.delete<IProduct>(url);
  }
}
