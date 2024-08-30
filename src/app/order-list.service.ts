import { Injectable } from '@angular/core';
import {OrderProduct} from "../interface/order-product";

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  orders:{id:string,date:string,title:string,orderProducts:OrderProduct[]}[] = [
    { id: '1', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
    { id: '2', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
    { id: '3', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
    { id: '4', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
    { id: '5', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
    { id: '6', date: '00/00/00', title: 'ЗАМОВЛЕННЯ', orderProducts: [] },
  ];
  constructor() {}
  findOrder(id: string) {
    const order = this.orders.find((el) => {
      if (el.id == id) {
        return true;
      } else {
        return false;
      }
    });
    return order;
  }
  getProducts(id:string){
    const order = this.findOrder(id)
    if (order){
    return order.orderProducts
    }
    return [];
  }
  saveProducts(id: string,products:OrderProduct[]) {
    const order = this.findOrder(id);
    if (order) {
      order.orderProducts = products;
    }
  }
}
