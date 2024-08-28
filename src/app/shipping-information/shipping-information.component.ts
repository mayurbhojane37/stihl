import { Component } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.css']
})
export class ShippingInformationComponent {
  shipmentDetailsForm: FormGroup;
  showPopup: boolean = false;

  constructor(private fb:FormBuilder, private router:Router){
    this.shipmentDetailsForm = this.fb.group({
      address: ['', Validators.required],
      area: ['', Validators.required],
      Pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
    
      
    
  }

  onSubmit() {
    if (this.shipmentDetailsForm.valid) {
      this.showPopup = true; 
      setTimeout(() => {
      }, 3000); 
    } else {
      alert('Please fill out all required fields');
    }
  }

  // closePopup() {
  //   this.showPopup = false;
  // }
  



}
