import { Component, Input, OnInit } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
declare var window :any

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent implements OnInit {

  popupModal:any
  @Input() parentId:any
  disp:any

  constructor(private itemService:AddItemService){}

  ngOnInit(): void {

      this.popupModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal'))
        setTimeout(() => {
          this.getProduct(this.parentId)
        }, 5000);



  }

  getProduct(id:any){
    this.popupModal.show();
    this.itemService.getItem(id).subscribe((result)=>{
      this.disp=result
      console.log(this.disp)
    })

  }

}
