import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  productList: IProduct[] = [];
  loader: Boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
    ){}

  ngOnInit(): void {
    setTimeout( () => {
      this._route.params.subscribe(params => {
        this._apiService.getProductById(Number(params['productId'])).subscribe((data: IProduct) => {
          this.product = data
          this.loader = false;
          this.color = this.product?.price as number > 200 ? 'red' : ''
        })
      });
    }, 1500)
  }
}
