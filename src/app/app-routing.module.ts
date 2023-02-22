import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PartnerAccountComponent } from './components/partner-account/partner-account.component';
import { PartnerAddItemsComponent } from './components/partner-add-items/partner-add-items.component';
import { PartnerItemListComponent } from './components/partner-item-list/partner-item-list.component';
import { PartnerLoginComponent } from './components/partner-login/partner-login.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { PartnerUpdateItemComponent } from './components/partner-update-item/partner-update-item.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserMyordersComponent } from './components/user-myorders/user-myorders.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"partner",component:PartnerPageComponent},
  {path:"menu",component:MenuComponent},
  {path:"about",component:AboutUsComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"createaccount",component:UserAccountComponent},
  {path:"partnerlogin",component:PartnerLoginComponent},
  {path:"partneraccount",component:PartnerAccountComponent},
  {path:"partnerpage", canActivate:[AuthGuard],component:PartnerPageComponent},
  {path:"partner-add-items", component:PartnerAddItemsComponent},
  {path:"partner-items-list", component:PartnerItemListComponent},
  {path:"partner-update-item/:id", component:PartnerUpdateItemComponent},
  {path:"userpage", component:UserPageComponent},
  {path:"rest-page", component:RestaurantPageComponent},
  {path:"myorders", component:UserMyordersComponent},
  {path:"cart", component:UserCartComponent},
  {path:"usermyorders", component:UserMyordersComponent}










];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
