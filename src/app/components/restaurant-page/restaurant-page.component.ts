import { Component } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent {
  menu:undefined|item[]
 menudis:any
  constructor(private itemService: AddItemService){}

  ngOnInit(): void {
    this.itemService.menuItem().subscribe((result)=>{
      console.log(result)
      this.menu=result
    })
  }
  rest(){
   this.menudis=this.menu
  }
  

}
