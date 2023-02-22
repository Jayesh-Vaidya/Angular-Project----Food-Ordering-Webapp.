import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { item } from 'src/app/shared/data-type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu:undefined|item[]

  constructor(private itemService: AddItemService){}

  ngOnInit(): void {
    this.itemService.homeItem().subscribe((result)=>{
      console.log(result)
      this.menu=result
    })
  }


}


