import {OrderProduct} from "./order-product";

export interface Order {
  id:string,
  date: string,
  title: string,
  orderProducts: OrderProduct[]
}
