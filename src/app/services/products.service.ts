import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow';
  productDetailsUrl = 'http://makeup-api.herokuapp.com/api/v1/products/1019.json';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.productsUrl)
  }

  getProductDetails(id:number) {
    return this.http.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  }
}
