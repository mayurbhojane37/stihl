import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
 import { PersonalDetailsComponent } from '../personal-details/personal-details.component';



@Component({
  selector: 'app-mobile-number-sign',
  templateUrl: './mobile-number-sign.component.html',
  styleUrls: ['./mobile-number-sign.component.css']
})
export class MobileNumberSignComponent {
  mobileForm: FormGroup;
  private dialogRef: any;
  hideComponent = false;


  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {
    this.mobileForm = this.fb.group({
      // number: ['', Validators.required],
      mobile: ['', Validators.required,]
    });
  }

  onSubmit() {
    if (this.mobileForm.valid) {
      console.log(this.mobileForm.value);
      this.hideComponent = true;

      this.openAddDepartmentDiologue();
      // this.router.navigate(['/personal-details'])
    }
    else {
      console.log("error are available ");

    }
  }

  openAddDepartmentDiologue() {
    // if (this.dialogRef) {
    //   this.dialogRef.close(); // Close the previous dialog if open
    // }



    this.dialogRef = this.dialog.open(PersonalDetailsComponent, {
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
