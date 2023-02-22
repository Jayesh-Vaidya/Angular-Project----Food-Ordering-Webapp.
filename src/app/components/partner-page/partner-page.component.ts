import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {

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
