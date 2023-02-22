import { Component, OnInit } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';
import {NgToastService} from 'ng-angular-popup';


@Component({
  selector: 'app-partner-item-list',
  templateUrl: './partner-item-list.component.html',
  styleUrls: ['./partner-item-list.component.css']
})
export class PartnerItemListComponent implements OnInit{
  listItem: any


  constructor(private addItemService:AddItemService, private toast : NgToastService) {}


  ngOnInit(): void {
    this.callItemApi();


  }
  deleteItem(id:any){
    console.log(id)
    this.addItemService.deleteItem(id).subscribe(()=>{

      this.callItemApi();
      this.toast.warning({detail:"Deleted", summary:"Item Deleted", duration:3000})
    })


  }

  callItemApi(){
    this.addItemService.itemList().subscribe((result)=>{
      console.log(result)
      this.listItem=result
      console.log(this.listItem)
    })

  }


}
