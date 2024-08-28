import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {

  constructor(private router:Router){}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateToSummery(){
    this.router.navigate(['/summery'])
  }
}
