import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MobileNumberSignComponent } from './mobile-number-sign/mobile-number-sign.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { Battery1Component } from './battery1/battery1.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SummaryComponent } from './summary/summary.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { MultiStepQuizComponent } from './multi-step-quiz/multi-step-quiz.component';

const routes: Routes = [
  {path:'', redirectTo:"/landing-page",pathMatch:'full'},
  {path:'landing-page',component:LandingPageComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-with-mobile',component:MobileNumberSignComponent},
  {path:'personal-detail',component:PersonalDetailsComponent},
  {path:'product-details',component:ProductSelectionComponent},
  {path:'shipping-user-info',component:ShippingInformationComponent},

  {path:'battery1',component:Battery1Component},


  //cart details page
  {path:'cart-details',component:CartDetailsComponent},
  {path:'shipping-detail',component:ShippingDetailsComponent},
  {path:'payment-info',component:PaymentDetailsComponent},
  {path:'summery',component:SummaryComponent},


  //wishlist
  {path:'wishlist',component:WishlistComponent},


  //compare-product
  {path:'campare-product',component:CompareProductsComponent},


  //multistep

  {path:'multistep',component:MultiStepQuizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
