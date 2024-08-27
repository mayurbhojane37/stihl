import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MultiStepQuizComponent } from './multi-step-quiz/multi-step-quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SummaryComponent } from './summary/summary.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { Battery1Component } from './battery1/battery1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MultiStepQuizComponent,
    FooterComponent,
    HeaderComponent,
   
    CartDetailsComponent,
    ShippingDetailsComponent,
    PaymentDetailsComponent,
    SummaryComponent,
    CompareProductsComponent,
    WishlistComponent,
    Battery1Component,
    SidebarComponent,
    LandingPageComponent,
    NewsletterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
