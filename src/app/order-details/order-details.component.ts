import {Component, OnInit} from '@angular/core';
import {CategoriesComponent} from "../categories/categories.component";
import {CategoriesFooterComponent} from "../categories-footer/categories-footer.component";
import {CategoriesProducts} from "../categories/categories-products/categories-products";
import {HeaderComponent} from "../header/header.component";
import {OrderInfoComponent} from "../order-info/order-info.component";
import {OrderProductsComponent} from "../order-info/order-products/order-products.component";
import {OrderProductsFooterComponent} from "../order-products-footer/order-products-footer.component";
import {Product} from "../../interface/category";
import {OrderProduct} from "../../interface/order-product";
import {OrderListComponent} from "../order-list/order-list.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {OrderListService} from "../order-list.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'order-details',
  standalone: true,
  imports: [
    CategoriesComponent,
    CategoriesFooterComponent,
    CategoriesProducts,
    HeaderComponent,
    OrderInfoComponent,
    OrderProductsComponent,
    OrderProductsFooterComponent,
    OrderListComponent,
    RouterLink,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent implements OnInit{
  title = 'website';
  products: Product[] = [];
  selectedProducts: OrderProduct[] = [];
  chosenProduct: OrderProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderListService: OrderListService,
    private router: Router,
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.selectedProducts = this.orderListService.getProducts(id)
  }

  save() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.orderListService.saveProducts(id, this.selectedProducts);
    this.router.navigate(['order-list']);
  }
  addProduct() {
    const findProduct = this.selectedProducts.find((el) => {
      if (this.chosenProduct.title == el.title) {
        return true;
      } else {
        return false;
      }
    });
    if (findProduct) {
      findProduct.amount = findProduct?.amount + 1;
      findProduct.total = findProduct.amount * findProduct.price;
    }
  }
  decreaseProduct() {
    const findProduct = this.selectedProducts.find((el) => {
      if (this.chosenProduct.title == el.title) {
        return true;
      } else {
        return false;
      }
    });

    if (findProduct && findProduct?.amount > 1) {
      findProduct.amount = findProduct?.amount - 1;
      findProduct.total = findProduct.amount * findProduct.price;
    }
  }
  deleteProduct() {
    const index = this.selectedProducts.findIndex((el) => {
      if (this.chosenProduct?.title == el.title) {
        return true;
      } else {
        return false;
      }
    });
    this.selectedProducts.splice(index, 1);
    this.chosenProduct = null as any;
  }

  setProduct(chosenProduct: OrderProduct) {
    this.chosenProduct = chosenProduct;
  }
  getSum() {
    let sum = 0;
    this.selectedProducts.map((product) => {
      sum = sum + product.total;
    });
    return sum;
  }

  setProducts(products: Product[]) {
    this.products = products;
  }
  addProducts(orderCategoriesItem: Product) {
    const foundProduct = this.selectedProducts.find((el) => {
      if (el.title == orderCategoriesItem.title) {
        return true;
      } else {
        return false;
      }
    });
    if (foundProduct) {
      foundProduct.amount = foundProduct.amount + 1;
      foundProduct.total = foundProduct.amount * foundProduct.price;
    } else {
      this.selectedProducts.push({
        title: orderCategoriesItem.title,
        price: orderCategoriesItem.price,
        amount: 1,
        total: orderCategoriesItem.price,
      });
    }
  }
}

class Car{
mark:string;
year:string;
constructor(markC:string,yearC:string) {
  this.mark = markC;
  this.year = yearC;
}
returnSum(){
  return this.mark + this.year
}
getSum(){
  console.log(this.year+this.mark)
}
}
const cars = [new Car('dkmld','2012'),new Car('msclm','2022'),new Car('jdbhjd','2023')]
cars.map((el)=>{
  if (el.year > '2022'){
    console.log(el.year)
  }
})
let car1 = new Car('toyota','8493')
let car2 = new Car('nissan','7890')

console.log(car1.returnSum())
car2.getSum()


class Animal{
name:string;
age:string;

return(){
  return this.name + this.age
}
get(){
  console.log(this.name+this.age)
}
}

 let animal1 = new Animal()
let animal2 = new Animal()

