import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import { CartDetailsComponent } from '../cart-details/cart-details.component';

@Component({
  selector: 'app-cart-bar',
  templateUrl: './cart-bar.component.html',
  styleUrls: ['./cart-bar.component.css']
})
export class CartBarComponent {
  constructor(private dialogRef: MatDialogRef<CartBarComponent>,private router:Router) {} // Inject MatDialogRef

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog
  }

  navigateToCartComponent(){
    this.router.navigate(['/cart-details'])
  }
}
