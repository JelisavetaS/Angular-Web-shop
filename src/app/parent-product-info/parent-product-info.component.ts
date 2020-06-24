import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-parent-product-info',
  templateUrl: './parent-product-info.component.html',
  styleUrls: ['./parent-product-info.component.css']
})
export class ParentProductInfoComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product){
    this.cart.addToCart(product);
  }

}
