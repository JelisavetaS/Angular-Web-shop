import { Component, OnInit, Output, OnDestroy , EventEmitter} from '@angular/core';
import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  public product: Product;

  @Output()
  public emitSignal : EventEmitter<Object> =  new EventEmitter<Object>();


  private paramMapSub: Subscription = null;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private http: HttpClient) {
    this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('productId'));


      this.productService.getProducts().subscribe((products: Product[]) => {
        products.forEach(p => {
          if(p.productId === pId){
            this.product = p;
          }
        });
      });
    }); 
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    if (this.paramMapSub != null){
      this.paramMapSub.unsubscribe();
      this.paramMapSub = null;
    }
  }

  public addToCart(product){
    this.emitSignal.emit(product);
  }

}
