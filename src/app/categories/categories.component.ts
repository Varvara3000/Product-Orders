import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgClass, NgForOf} from "@angular/common";
import {Category} from "../../interface/category";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HttpClientModule, InlineSVGModule, NgForOf, NgClass],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit{
  categories = [
    {
      name: 'Солодощі',
      products: [
        {title:'Печиво',price:30},
        {title:'Цукерки шоколадні',price:56},
        {title:'Цукерки карамельні',price:49},
        {title:'Цукерки желейні',price:50},
        {title:'Батончики',price:20},
        {title:'Бісквіти',price:68},
        {title:'Рулети',price:70},
        {title:'Крекери',price:49},
        {title:'Згущене молоко',price:20},
        {title:'Какао',price:90},
        {title:'Вафлі',price:56},
        {title:'Вафельні трубочки',price:30},
        {title:'Зефір',price:49},
        {title:'Шоколадне масло',price:99},
      ],
    },
    {
      name: 'Бакалія',
      products: [
        {title:'Борошно',price:48},
        {title:'Крупа',price:49},
        {title:'Олія',price:29},
        {title:'Оцет',price:29},
        {title:'Спеції',price:20},
        {title:'Кетчуп',price:90},
        {title:'Соєві продукти',price:100},
        {title:'Готові сніданки',price:38},
        {title:'Оливки',price:44},
        {title:'Цукор',price:35},
        {title:'Сіль',price:31},
        {title:'Дріжджі',price:13},
        {title:'Кисіль',price:59},
        {title:'Соління',price:13},
        {title:'Харчові добавки',price:21},
        {title:'Пасти',price:65},
      ],
    },
    {
      name: 'Фрукти',
      products: [
        {title:'Банан',price:67},
        {title:'Лимон',price:79},
        {title:'Апельсин',price:59},
        {title:'Яблуко',price:17},
        {title:'Грейпфрут',price:55},
        {title:'Полуниця',price:76},
        {title:'Лайм',price:23},
        {title:'Нектарин',price:99},
        {title:'Манго',price:59},
        {title:'Виноград',price:23},
        {title:'Персик інжирний',price:14},
        {title:'Персик ваговий',price:99},
        {title:'Кавун',price:59},
        {title:'Груша',price:11},
        {title:'Кокос',price:39},

      ],
    },
  ];
  chosenCategory:Category
  @Output() selectCategoryEmitter = new  EventEmitter()
  ngOnInit(){
    this.chosenCategory = this.categories[0];
    this.selectCategoryEmitter.emit(this.categories[0].products)
  }
  choseCategory(category:Category){
    this.chosenCategory = category;
    this.selectCategoryEmitter.emit(category.products)
  }
}
