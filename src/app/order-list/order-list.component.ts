import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {OrderListService} from "../order-list.service";
import {Product} from "../../interface/category";
import {Order} from "../../interface/order";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent implements OnInit{
  orders:Order[] = []

  constructor(public orderListServer:OrderListService) {
  }
  ngOnInit() {
    this.orders = this.orderListServer.orders
  }
}
