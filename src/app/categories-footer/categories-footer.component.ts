import { Component } from '@angular/core';
import {InlineSVGModule} from "ng-inline-svg-2";

@Component({
  selector: 'app-categories-footer',
  standalone: true,
  imports: [
    InlineSVGModule
  ],
  templateUrl: './categories-footer.component.html',
  styleUrl: './categories-footer.component.scss'
})
export class CategoriesFooterComponent {

}
