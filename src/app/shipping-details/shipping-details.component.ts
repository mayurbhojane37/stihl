import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent {

constructor(private router:Router){}


navigateTo(route: string) {
  this.router.navigate([route]);
}


  navigateToPaymentDetails(){
this.router.navigate(['/payment-info'])
  }

}
