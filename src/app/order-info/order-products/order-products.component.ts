import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { OrderProduct } from '../../../interface/order-product';

@Component({
  selector: 'app-order-products',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './order-products.component.html',
  styleUrl: './order-products.component.scss',
})
export class OrderProductsComponent {
  orderLabels = {
    title: 'Назва продукту',
    amount: 'Кількість',
    price: 'Ціна',
    total: 'Всього',
  };
  @Output() orderProductsEmit = new EventEmitter();
  @Input() selectedProducts: OrderProduct[] = [];
  chosenProduct: OrderProduct;

  selectProduct(orderProductsItem: OrderProduct) {
    this.chosenProduct = orderProductsItem;
    this.orderProductsEmit.emit(orderProductsItem);
  }
}
