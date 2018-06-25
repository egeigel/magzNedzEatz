import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meal:  Meal = {
    id:1,
    name:'Pasta Salad',
    recipe:'to be continued',
    imageUrl:'placeholder'
  }
  constructor() { }

  ngOnInit() {
  }

}
