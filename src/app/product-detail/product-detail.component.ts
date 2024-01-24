import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  constructor(private _route: ActivatedRoute){}

  product?: Product;
  productList: Product[] = productsList;
  loader: Boolean = true;
  color: string = '';

  ngOnInit(): void {
    setTimeout( () => {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loader = false;
        this.color = this.product?.price as number > 8 ? 'red' : ''
      });
    }, 1500)
  }
}
