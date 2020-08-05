import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl} from '@angular/forms';
import { PRODUCT } from 'src/interface/product';
import { PRODUCTS } from 'src/assets/mock-products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productsInCart: PRODUCT[];

  public products: PRODUCT[];

  public cartGroup: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.productsInCart = [];

    this.cartGroup = this.fb.group({

      items: this.fb.array([])

    })

    this.products = PRODUCTS.slice(0,3);
  }

  ngOnInit(): void {

    this.productsInCart = this.products;

    
    this.products.forEach(product => {
      this.addItems(product);
    })

  }

  get items():FormArray {
    return this.cartGroup.get('items') as FormArray;
  }

  addItems(product) {
    const control = this.newItem();
    (<AbstractControl>control.get('price')).setValue(product.price);
    (<AbstractControl>control.get('unit')).setValue(product.unit);
    (<AbstractControl>control.get('name')).setValue(product.name);
    control.updateValueAndValidity();
    this.items.push(control);
  }

  newItem(): FormGroup {
    return this.fb.group({
      price: '',
      unit: '',
      name: ''
    });
 }

 removeItem(i:number) {
  this.items.removeAt(i);
}

addUnit(i:number){
  const unit = this.items.at(i).get('unit');
  let noOfUnits = unit.value;
  noOfUnits++;
  unit.setValue(noOfUnits);
  unit.updateValueAndValidity();


}

subtractUnit(i:number){
  const unit = this.items.at(i).get('unit');
  let noOfUnits = unit.value;
  noOfUnits--;
  unit.setValue(noOfUnits);
  unit.updateValueAndValidity();
  

}

}
