import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
   }

  ngOnInit(){
  }

}
