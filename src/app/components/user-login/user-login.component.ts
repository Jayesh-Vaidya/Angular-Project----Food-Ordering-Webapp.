import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserAccountService } from 'src/app/services/user-account.service';
import {NgToastService} from 'ng-angular-popup';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  implements OnInit{

userLogData: any;
userData: any;
showLogin: boolean = true;

  constructor(private user:UserAccountService,private toast:NgToastService) { }
  ngOnInit(): void {
    this.userLogData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{8,20}")])
    })
    this.userData = new FormGroup({
      full_name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{3,30}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{8,20}")])
    })
  }
  getData(data:any) {
    console.log(data)
    this.user.userLogin(data)
    this.toast.success({detail:"Success", summary:" You Have Logged In", duration:3000})
    this.user.isLoginError.subscribe((isError) => {
      if (isError) {
        this.toast.error({detail:"Error", summary:" Please Enter Valid Credentials,", duration:3000})

      }
    })



  }
  getSignupData(data: any) {
    this.user.userSignUp(data)
    this.toast.success({detail:"Success", summary:" You Have Registered Successfully, Please Login", duration:3000})


  }
  openLogin() {
    this.showLogin = true

  }

  openSignUp() {
    this.showLogin = false

  }


}

