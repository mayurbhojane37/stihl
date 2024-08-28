import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductSelectionComponent } from '../product-selection/product-selection.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  personalDetailsForm: FormGroup;
  private dialogRef: any;
  hideComponent = false;


  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {
    this.personalDetailsForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.personalDetailsForm.valid) {
      this.hideComponent = true;

      // console.log(this.personalDetailsForm.value);
      // this.router.navigate(['product-selection']);
      this.openAddDepartmentDiologue();

    }
  }


  openAddDepartmentDiologue() {
    // if (this.dialogRef) {
    //   this.dialogRef.close(); // Close the previous dialog if open
    // }

    this.dialogRef = this.dialog.open(ProductSelectionComponent, {
      width: '70%',
      // disableClose: false,
      closeOnNavigation:true
      // data: categoryData,
      // backdropClass: 'dialog-backdrop', 
      // panelClass: 'custom-dialog-container'  



    });
    // dialogConfig.backdropClas  s = 'dialog-background'; // Add this line

    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
}
