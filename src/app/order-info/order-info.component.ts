import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-info',
  standalone: true,
  imports: [],
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss'
})
export class OrderInfoComponent {
 @Input() orderTotal = 0
}
