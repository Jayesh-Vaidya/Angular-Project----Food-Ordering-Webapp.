import { Component } from '@angular/core';

@Component({
  selector: 'app-user-myorders',
  templateUrl: './user-myorders.component.html',
  styleUrls: ['./user-myorders.component.css']
})
export class UserMyordersComponent {

  orderItems:any
  orderData:any

  constructor(){}

  ngOnInit(): void {
    this.getOrderItems();
  }

  getOrderItems(){
    this.orderItems = localStorage.getItem('cart');
    this.orderData = JSON.parse(this.orderItems);
    console.log(this.orderData)
  }
}

