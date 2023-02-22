import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PartnerAccountService } from '../../services/partner-account.service'
import {NgToastService} from 'ng-angular-popup';



@Component({
  selector: 'app-partner-account',
  templateUrl: './partner-account.component.html',
  styleUrls: ['./partner-account.component.css']
})
export class PartnerAccountComponent {
  partData: any;
  partLogData: any
  showLogin: boolean = true;
  loginError: string = "";

  constructor(private part: PartnerAccountService,private toast:NgToastService) { }
  ngOnInit(): void {

    this.partData = new FormGroup({
      full_name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{3,30}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{8,20}")])
    })

    this.partLogData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{8,20}")])
    })

    this.part.reloadPartner()

  }
  getData(data: any) {
    this.part.partnerSignup(data)
    this.toast.success({detail:"Success", summary:" You Have Registered Successfully, Please Login", duration:3000})

  }

  getLogData(data: any) {
    this.part.partnerLogin(data);
    this.toast.success({detail:"Success", summary:" You Have Logged In,", duration:3000})
    this.part.isLoginError.subscribe((isError) => {
      if (isError) {
        this.toast.error({detail:"Error", summary:" Please Enter Valid Credentials,", duration:3000})

      }
    })
  }

  openLogin() {
    this.showLogin = true

  }

  openSignUp() {
    this.showLogin = false

  }
}
