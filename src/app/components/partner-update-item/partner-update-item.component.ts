import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';
import{NgToastService} from 'ng-angular-popup';



@Component({
  selector: 'app-partner-update-item',
  templateUrl: './partner-update-item.component.html',
  styleUrls: ['./partner-update-item.component.css']
})
export class PartnerUpdateItemComponent  implements OnInit {

  partUpItems:any;
  itemData:undefined | item

  constructor(private route:ActivatedRoute, private addItemService:AddItemService, private toast:NgToastService, private router:Router) { }

  ngOnInit(): void{

    let itemId=this.route.snapshot.paramMap.get('id')
    console.log(itemId)
    itemId && this.addItemService.getItem(itemId).subscribe((result)=>{
      console.log(result)
      this.itemData=result
    })
  }

  getData(item:item){
    console.log(item)
    if(this.itemData){
      item.id=this.itemData.id
    }
    this.addItemService.updateItem(item).subscribe((result)=>{
      if(result){
        console.log(result)

        this.toast.success({detail:"Success", summary:"Item Updated Successfully", duration:3000})
        this.router.navigate(['partner-items-list'])


      }
    })
  }



}
