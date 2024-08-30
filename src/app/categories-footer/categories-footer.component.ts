import { Component, EventEmitter, Output } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-categories-footer',
  standalone: true,
  imports: [InlineSVGModule],
  templateUrl: './categories-footer.component.html',
  styleUrl: './categories-footer.component.scss',
})
export class CategoriesFooterComponent {

  @Output() saveProductsEvent: EventEmitter<any> = new EventEmitter();
  save() {
    this.saveProductsEvent.emit()

  }
}
