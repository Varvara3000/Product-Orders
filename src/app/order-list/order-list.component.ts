import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent {
  orders = [
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
    { date: '00/00/00', title: 'ЗАМОВЛЕННЯ', subtitle: 'Редагувати' },
  ];
}
