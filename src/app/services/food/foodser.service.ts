import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodserService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        name: 'Biryani',
        price: 10,
        desp: 'Biryani is a mixed rice dish originating from the Indian subcontinent, it is made with Indian spices & rice.',
        id: 1,
        imageUrl: 'assets/Images/img-biryani.jpg',
      },
      {
        name: 'Burger',
        price: 10,
        desp: 'A burger is a food consisting of fillings usually a patty of ground meat inside a sliced bun or bread roll.',
        id: 2,
        imageUrl: 'assets/Images/img-burger.jpg',
      },
      {
        name: 'Sandwich',
        price: 10,
        desp: 'A sandwich consists of bread, sliced cooked poultry, fried bacon, lettuce, tomato, and mayonnaise.',
        id: 3,
        imageUrl: 'assets/Images/img-club-sandwich.jpg',
      },
      {
        name: 'French Fries',
        price: 10,
        desp: 'French fries are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium and France.',
        id: 4,
        imageUrl: 'assets/Images/img-french-fries.jpg',
      }
    ];
  }

}