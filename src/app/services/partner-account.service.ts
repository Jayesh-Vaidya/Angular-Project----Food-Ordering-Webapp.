import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login } from '../shared/data-type';




@Injectable({
  providedIn: 'root'
})
export class PartnerAccountService {

  isPartnerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  partnerSignup(data: any) {
    console.warn('service called')
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.router.navigate(['/']);
      });
  }
  reloadPartner(){
    if(localStorage.getItem('seller')){
      this.isPartnerLoggedIn.next(true);
      this.router.navigate(['partner-items-list']);

    }
  }

  partnerLogin(data:login){
    console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.log(result)
      if(result && result.body && result.body.length){
        console.log('partner logged in')
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['partner-items-list']);
      }
      else{
        console.log('partner logged failed')
        this.isLoginError.emit(true)
      }
    });

  }


}
