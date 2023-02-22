import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';
import {NgToastService} from 'ng-angular-popup';


declare var window :any


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:undefined|item[]
  addCart:any
  product:any
  itemDis:any
  cartItems:any

  dataId:any
  showItems:any
  showData:any
  itemName:any
  quantity:number=1


  addmsg:boolean=false;

  term:any;
  popupModal:any
  popupShow:boolean=false



  constructor(private itemService: AddItemService, private toast:NgToastService){


  }

  ngOnInit(): void {
    this.itemService.menuItem().subscribe((result)=>{
      console.log(result)
      this.menu=result
      console.log(this.menu)
      this.popupModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal'))
    })
  }

  addToCart(id:any){
    if(localStorage.getItem('user')){
      this.itemService.getItem(id).subscribe((result)=>{
        this.addCart=result
        this.addCart.quantity=this.quantity
        this.quantity=1

        // this.addCart.push(this.quantity)
        // console.log(this.addCart)
        this.itemService.localAddCart(this.addCart)
      })
      let getcart:any = localStorage.getItem('cart')
      this.cartItems=JSON.parse(getcart)


      this.toast.success({detail:"Success", summary:" Item Added To Cart", duration:3000})
    }else{
      this.toast.warning({detail:"Info", summary:"Please Login For Adding Items To Cart", duration:3000})

    }
    console.log(typeof this.addCart)


  }
  openModal(id:any){
    this.popupModal.show();

    this.itemService.displayItem(id).subscribe((result)=>{
      console.log(result)
      this.itemDis=[result]
      console.log(this.itemDis)
    })

  }

  closeModal(){
    this.popupModal.hide();
  }

  qtnMinus(){
    this.quantity = this.quantity - 1
    if(this.quantity = 1){
      return this.quantity = 1
    }else{
      return this.quantity
    }

  }
  qtnPlus(){
    this.quantity = this.quantity + 1

  }




}
