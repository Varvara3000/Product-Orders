import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesProducts } from './categories/categories-products/categories-products';
import { OrderProductsComponent } from './order-info/order-products/order-products.component';
import { OrderProductsFooterComponent } from './order-products-footer/order-products-footer.component';
import { CategoriesFooterComponent } from './categories-footer/categories-footer.component';
import { Product } from '../interface/category';
import { OrderProduct } from '../interface/order-product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    OrderInfoComponent,
    CategoriesComponent,
    CategoriesProducts,
    OrderProductsComponent,
    OrderProductsFooterComponent,
    CategoriesFooterComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website';
  products: Product[] = [];
  selectedProducts: OrderProduct[] = [];
  chosenProduct:OrderProduct
  addProduct(){
    const findProduct=this.selectedProducts.find((el)=>{
      if(this.chosenProduct.title == el.title){
        return true
      }else{
        return false
      }
    })
    if(findProduct){
      findProduct.amount = findProduct?.amount + 1;
      findProduct.total = findProduct.amount * findProduct.price;
    }
  }
  decreaseProduct(){
    const findProduct=this.selectedProducts.find((el)=>{
      if(this.chosenProduct.title == el.title){
        return true
      }else{
        return false
      }
    })
    if(findProduct && findProduct?.amount >1){
      findProduct.amount = findProduct?.amount - 1;
      findProduct.total = findProduct.amount * findProduct.price;
    }
  }
  deleteProduct(){
    const index = this.selectedProducts.findIndex((el)=>{
      if(this.chosenProduct?.title == el.title){
        return true
      }else{
        return false
      }
    })
    this.selectedProducts.splice(index,1)
    this.chosenProduct = null as any
  }

  setProduct(chosenProduct: OrderProduct) {
 this.chosenProduct = chosenProduct
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
