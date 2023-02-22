import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';
import {NgToastService} from 'ng-angular-popup';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {


  constructor(private router:Router, private toast:NgToastService, private itemService:AddItemService) { }

  cartItems:any ='';
  cartData:any;
  cartQtn:any
  display:boolean=true
  price:number = 0;
  totalqtn:number = 0;
  totalsum:number=0;


  ngOnInit(): void {
    this.getCartItems();
    console.log(this.price)



  }


  getCartItems(){
    this.cartItems = localStorage.getItem('cart');
    this.cartData = JSON.parse(this.cartItems);
    console.log(this.cartData)

    // For Each -- Total Price
    this.cartData.forEach((item:any) => {
      let itemPrice = Number.parseInt(item.price)
      this.price = this.price + itemPrice
    });

       // For Each -- Item Sum
    this.cartData.forEach((item:any) => {
      let itemsum = item.quantity * item.price
      this.totalsum = this.totalsum + itemsum
      console.log(this.totalsum)
    });

     // For Each -- Total Quantity
    //  this.cartData.forEach((item:any) => {
    //   let itemQtn = Number.parseInt(item.quantity)
    //   console.log(itemQtn)
    //   this.totalqtn = this.totalqtn + itemQtn
    //   console.log(this.totalqtn)
    // });



    this.cartDisplay();
  }
  removeCartItem(id:any){
    this.itemService.localRemoveCart(id);

    // localStorage.getItem('cart');
    // let items = this.cartData
    // let remove = items.filter((item:any)=>item.id!==id)
    // localStorage.setItem('cart',JSON.stringify(remove));
    this.price = 0;
    this.totalsum=0;
    this.totalqtn=0;
    this.getCartItems();



  }

  cartDisplay(){
    let localData:any = localStorage.getItem('cart');
    localData=JSON.parse(localData)
    console.log(localData.length)

    if(localData.length==0){
      this.display=false;
      console.log("zero")
    }else{
      this.display=true;
    }
  }

  order(){
    let localData:any = localStorage.getItem('cart');
    localData=JSON.parse(localData)
    console.log(localData)
    localStorage.setItem('order',JSON.stringify(localData));
    let empty:any
    localStorage.setItem('cart',JSON.stringify(empty));             //  Cart -- Indefined on Order Placed (Bug)

    this.router.navigate(['menu']);
    this.toast.success({detail:"Success", summary:" Order Placed Successfully", duration:3000})
    this.display=false;

  }
}
