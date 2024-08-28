import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MultiStepQuizComponent } from '../multi-step-quiz/multi-step-quiz.component';
import { MobileNumberSignComponent } from '../mobile-number-sign/mobile-number-sign.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private dialogRef: any;
  hideComponent = false;
  constructor(private router:Router,private dialog: MatDialog){}

  navigateToMultiStepQuiz(){
    this.router.navigate(['/multistep'])
  }

  navigateToSignIn(){
    this.router.navigate(['/sign-in'])
  }

  navigateToWishlist(){
    this.router.navigate(['/wishlist'])
  }

  navigateToMobileSign(){
    this.hideComponent = true;
    this.openAddDepartmentDiologue();
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
