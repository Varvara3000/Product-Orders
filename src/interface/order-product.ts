import {Product} from "./category";

export interface OrderProduct extends Product{
  amount:number;
  total:number;
}
