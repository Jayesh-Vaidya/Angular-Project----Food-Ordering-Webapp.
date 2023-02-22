import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';
import {NgToastService} from 'ng-angular-popup';



@Component({
  selector: 'app-partner-add-items',
  templateUrl: './partner-add-items.component.html',
  styleUrls: ['./partner-add-items.component.css']
})
export class PartnerAddItemsComponent implements OnInit {
  partAddItems:any;

  constructor(private addItemService:AddItemService, private router:Router, private toast:NgToastService ) { }
  ngOnInit(): void{
    this.partAddItems = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,10}")]),
      origin: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{3,30}")]),
      description: new FormControl(''),
      url: new FormControl('')
    })


  }
  addItems(data:item) {
    this.addItemService.addIt(data).subscribe((result:any)=>{
      console.log(result);
      if(result){

        this.toast.success({detail:"Success", summary:"Item Added", duration:3000})
        this.router.navigate(['partner-items-list'])

      }
    })
  }
}
