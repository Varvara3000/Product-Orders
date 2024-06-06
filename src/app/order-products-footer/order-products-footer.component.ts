import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InlineSVGModule} from "ng-inline-svg-2";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {OrderProduct} from "../../interface/order-product";

@Component({
  selector: 'app-order-products-footer',
  standalone: true,
  imports: [
    InlineSVGModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './order-products-footer.component.html',
  styleUrl: './order-products-footer.component.scss'
})
export class OrderProductsFooterComponent {
@Input() chosenProduct:OrderProduct
 @Output() deleteButtonEmitter = new EventEmitter()
 @Output() decreaseProductEmitter = new EventEmitter()
  @Output()addProductEmitter = new EventEmitter()
  addProduct(){
  this.addProductEmitter.emit()
  }
  decreaseProduct(){
  this.decreaseProductEmitter.emit()
  }
  deleteProduct(){
  this.deleteButtonEmitter.emit()
  }
}
