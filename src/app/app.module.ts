import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { PartnerLoginComponent } from './components/partner-login/partner-login.component';
import { PartnerAccountComponent } from './components/partner-account/partner-account.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { PartnerAddItemsComponent } from './components/partner-add-items/partner-add-items.component';
import { PartnerItemListComponent } from './components/partner-item-list/partner-item-list.component';
import { PartnerUpdateItemComponent } from './components/partner-update-item/partner-update-item.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserMyordersComponent } from './components/user-myorders/user-myorders.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgToastModule } from 'ng-angular-popup';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    UserLoginComponent,
    UserAccountComponent,
    PartnerLoginComponent,
    PartnerAccountComponent,
    PartnerPageComponent,
    PartnerAddItemsComponent,
    PartnerItemListComponent,
    PartnerUpdateItemComponent,
    UserPageComponent,
    RestaurantPageComponent,
    FooterComponent,
    UserMyordersComponent,
    UserCartComponent,
    PopupDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgbModule,
    NgToastModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
