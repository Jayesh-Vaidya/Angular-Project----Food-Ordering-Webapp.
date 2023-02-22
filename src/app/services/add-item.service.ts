import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { item } from '../shared/data-type';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  cartItems:any
  cartData:any
  itemData:any
  localCart:any
  totalqtn:number=0;
  qtnemit = new EventEmitter<number>();
  removemit = new EventEmitter<boolean>(false);


  constructor(private http:HttpClient) {}
   addIt(data:item){
    console.log("service")
    return this.http.post('http://localhost:3000/items', data)

   }
   itemList(){
    return this.http.get<item>('http://localhost:3000/items');
   }

   deleteItem(id:any){
    return this.http.delete(`http://localhost:3000/items/${id}`);
   }

   getItem(id:string){
    return this.http.get<item>(`http://localhost:3000/items/${id}`);
   }

   updateItem(update:item){
    return this.http.put(`http://localhost:3000/items/${update.id}`,update);
   }

   menuItem(){
    return this.http.get<item[]>("http://localhost:3000/items?_limit=9");
   }
   homeItem(){
    return this.http.get<item[]>("http://localhost:3000/items?_limit=3");
   }
   orderIt(data:item){
    return this.http.post<item[]>('http://localhost:3000/orders', data)
   }
   displayItem(id:any){
    return this.http.get<item>(`http://localhost:3000/items/${id}`);
   }


   localAddCart(data:any){
    let localData = localStorage.getItem('cart');
    console.log(data)
    let cartData = [];
    if(!localData){
      localStorage.setItem('cart',JSON.stringify([data]));
      console.log("Data added to local storage")
    }else{
      cartData=JSON.parse(localData)
      cartData.push(data)
      localStorage.setItem('cart',JSON.stringify(cartData));


    }
    this.totalqtn=0
    this.cartItems = localStorage.getItem('cart');
    this.itemData = JSON.parse(this.cartItems);
     // For Each -- Total Quantity
     this.itemData.forEach((item:any) => {
      let itemQtn = Number.parseInt(item.quantity)
      console.log(itemQtn)
      this.totalqtn = this.totalqtn + itemQtn
      this.qtnemit.emit(this.totalqtn)
      console.log(this.totalqtn)
    });

  }

  localRemoveCart(id:any){
    console.log(id)
    this.localCart = localStorage.getItem('cart');
    this.cartData = JSON.parse(this.localCart);
    let items = this.cartData
    console.log(this.cartData)
    let remove = items.filter((item:any)=>item.id!==id)
    localStorage.setItem('cart',JSON.stringify(remove));
    this.removemit.emit(true)


  }

}

