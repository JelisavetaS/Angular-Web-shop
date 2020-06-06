import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products: Observable<Product[]>;
  private readonly productUrl = 'assets/makeup-products.json'

  constructor(private http: HttpClient) {
    this.refreshProducts();
  }

  private refreshProducts(): Observable<Product[]>{
    this.products = this.http.get<Product[]>(this.productUrl);
    return this.products;
  }

  public getProducts(): Observable<Product[]>{
    return this.products;
  }

}