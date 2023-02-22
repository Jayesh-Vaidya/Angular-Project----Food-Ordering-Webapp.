import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AddItemService } from 'src/app/services/add-item.service';
import {NgToastService} from 'ng-angular-popup';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuType: string = "default";
  partnerName:any="";
  partnerStore:any="";
  userStore:any="";
  userName:any="";
  cartData:any
  cartItems:any
  totalqtn:number = 0;
  displayqtn:number = 0;
  showqtn:number = 0;


  constructor(private router: Router, private itemService:AddItemService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {


        if(localStorage.getItem('seller') && val.url.includes('partner')){
          this.partnerStore=localStorage.getItem('seller');
          console.log(this.partnerStore)
          let partnerData = JSON.parse(this.partnerStore)[0];
          console.log(partnerData)
          this.partnerName = partnerData.full_name;
          this.menuType="partner"
        }
        else if(localStorage.getItem('user')){
          this.userStore=localStorage.getItem('user');
          let userData = JSON.parse(this.userStore)[0];
          this.userName = userData.full_name;
          this.menuType="user"
          this.getCartQtn()
          // this.totalqtn=0
          this.itemService.qtnemit.subscribe((result)=>{
         console.log(result)
         this.totalqtn=0
         this.totalqtn=result
         console.log(this.totalqtn)
         this.showqtn = this.totalqtn

        })
         console.log(this.totalqtn)
         this.showqtn = this.displayqtn
        //  if(this.totalqtn<1){
        //   this.showqtn = this.displayqtn
        // }else{
        //   this.showqtn = this.totalqtn
        // }
        this.itemService.removemit.subscribe((isError) => {
          if (isError) {
            this.getCartQtn()
          }
          this.showqtn = this.displayqtn
        })







        }

        else {
          console.log('Outside Area')
          this.menuType="default"
        }

      }


    })

  }

  logout(){
    localStorage.removeItem('seller');
    this.toast.success({detail:"Success", summary:" You Have Logged Out", duration:3000})
    this.router.navigate(['/'])
    this.menuType="default"
  }
  userlogout(){
    localStorage.removeItem('user');
    this.toast.success({detail:"Success", summary:" You Have Logged Out", duration:3000})
    this.router.navigate(['/'])
    this.menuType="default"
  }


  toReview(){
    this.router.navigate(['/'])
    document.getElementById("review")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    this.router.navigate(['/'])
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }

  getCartQtn(){
    this.cartItems = localStorage.getItem('cart');
    this.cartData = JSON.parse(this.cartItems);
    console.log(this.cartData)

    // For Each -- Total Quantity
    this.displayqtn=0
    this.cartData.forEach((item:any) => {
      let itemQtn = Number.parseInt(item.quantity)
      console.log(itemQtn)
      this.displayqtn = this.displayqtn + itemQtn
      console.log(this.displayqtn)
    })


  }



}
