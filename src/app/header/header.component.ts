import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MultiStepQuizComponent } from '../multi-step-quiz/multi-step-quiz.component';
import { MobileNumberSignComponent } from '../mobile-number-sign/mobile-number-sign.component';
import { MatDialog } from '@angular/material/dialog';
import { CartBarComponent } from '../cart-bar/cart-bar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

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
    this.dialogRef = this.dialog.open(MobileNumberSignComponent, {
      width: '30%',
      height:'100%',
      closeOnNavigation:true
    });


    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
    
  }


  openCartDialog() {
    this.dialog.open(CartBarComponent, {
      width: '40%', // Set the width of the dialog
      height: '100%', // Optionally set the height
      position: { right: '0' } // Position the dialog on the right
    });
  }

  openMenuDialog(){
    this.dialog.open(MenuBarComponent, {
      width: '30%', // Set the width of the dialog
      height: '100%', // Optionally set the height
      position: { left: '0' } // Position the dialog on the right
    });
  }

}
