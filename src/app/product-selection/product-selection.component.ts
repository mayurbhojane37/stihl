import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ShippingDetailsComponent } from '../shipping-details/shipping-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ShippingInformationComponent } from '../shipping-information/shipping-information.component';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent {
  productSelection:FormGroup;
  hideComponent = false;
  dialogRef:any;

  constructor(private fb:FormBuilder, private router:Router,private dialog:MatDialog){
    this.productSelection = this.fb.group({
      productName: ['', Validators.required],
      quantity: ['', Validators.required],
      
    });
  }
  onSubmit(){
if(this.productSelection.valid){
  this.hideComponent = true;
  this.openAddDepartmentDiologue();

// this.router.navigate(['shipping-details'])
}
  }

  openAddDepartmentDiologue() {
    // if (this.dialogRef) {
    //   this.dialogRef.close(); // Close the previous dialog if open
    // }



    this.dialogRef = this.dialog.open(ShippingInformationComponent, {
      width: '70%',
      disableClose: true,
      // data: categoryData,
      // backdropClass: 'dialog-backdrop', 
      // panelClass: 'custom-dialog-container'  



    });
    // dialogConfig.backdropClas  s = 'dialog-background'; // Add this line

    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
