import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgForOf } from '@angular/common';
import {Product} from "../../../interface/category";

@Component({
  selector: 'app-categories-products',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './categories-products.html',
  styleUrl: './categories-products.scss',
})
export class CategoriesProducts {
@Input()  orderCategoriesItems:Product[] = [];
@Output() selectCategoriesProduct = new EventEmitter()
chosedProduct(orderCategoriesItem:Product){
  this.selectCategoriesProduct.emit(orderCategoriesItem)
}
}
