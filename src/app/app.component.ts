import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {OrderInfoComponent} from './order-info/order-info.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoriesProducts} from './categories/categories-products/categories-products';
import {OrderProductsComponent} from './order-info/order-products/order-products.component';
import {OrderProductsFooterComponent} from './order-products-footer/order-products-footer.component';
import {CategoriesFooterComponent} from './categories-footer/categories-footer.component';
import {Product} from '../interface/category';
import {OrderProduct} from '../interface/order-product';
import {NgIf} from '@angular/common';
import {OrderListComponent} from "./order-list/order-list.component";

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
    OrderListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
