import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileNumberSignComponent } from '../mobile-number-sign/mobile-number-sign.component';
import { MatDialog } from '@angular/material/dialog';
import { CartBarComponent } from '../cart-bar/cart-bar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

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
    this.dialogRef = this.dialog.open(MobileNumberSignComponent, {
      width: '30%',
      height:'100%',
      // disableClose: false,
      closeOnNavigation:true,
      disableClose: false
    });
   

    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  openCartDialog() {
    this.dialog.open(CartBarComponent, {
      width: '40%', 
      height: '100%', 
      position: { right: '0' },
      disableClose: false
    });
  }

  openMenuDialog(){
    this.dialog.open(MenuBarComponent, {
      width: '30%', 
      height: '100%', 
      position: { left: '0' }, 
      disableClose: false,
      closeOnNavigation:true,
    });
  }


}
