import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileNumberSignComponent } from '../mobile-number-sign/mobile-number-sign.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  private dialogRef: any;
  hideComponent = false;
  constructor(private router: Router,private dialog: MatDialog) {}



  navigateToWishlist(){
    this.router.navigate(['/wishlist']);
  }

  navigateToSignIn(){
    this.router.navigate(['/sign-in'])
  }

  navigateToMobileSign(){
    this.hideComponent = true;
    this.openAddDepartmentDiologue();
  }

  navigateToBattery1(){
    this.router.navigate(['/battery1'])
  }


  navigateToMultiStepQuiz(){
    this.router.navigate(['/multistep'])
  }


  openAddDepartmentDiologue() {
    // if (this.dialogRef) {
    //   this.dialogRef.close(); // Close the previous dialog if open
    // }

    this.dialogRef = this.dialog.open(MobileNumberSignComponent, {
      width: '30%',
      height:'100%',
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
