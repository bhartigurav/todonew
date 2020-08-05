import { Component, OnInit } from '@angular/core';

import { PRODUCT } from '../../interface/product'; 
import { PRODUCTS } from '../../assets/mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: PRODUCT[];

  constructor() { 

    this.products = [];

  }

  ngOnInit(): void {

    this.products = [...PRODUCTS];
    
  }

}
