import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { login } from '../shared/data-type';
import {NgToastService} from 'ng-angular-popup';




@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

isUserLoggedIn = new BehaviorSubject<boolean>(false)
isLoginError= new EventEmitter<boolean>(false)




  constructor(private http:HttpClient, private router:Router, toast:NgToastService) { }
  userSignUp(data: any){
    console.log(data)
    return this.http.post('http://localhost:3000/user',data,{observe: 'response'}).subscribe((result)=>{
      console.log(result)
      this.isUserLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(result.body))
        this.router.navigate(['/']);
    })


  }
  userLogin(data:login){
    console.log(data)
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.log(result)
      if(result && result.body && result.body.length){
        console.log('user logged in')
        localStorage.setItem('user', JSON.stringify(result.body))
        this.router.navigate(['']);
      }
      else{
        console.log('user logged failed')
        this.isLoginError.emit(true)

      }
    })
  }
}
