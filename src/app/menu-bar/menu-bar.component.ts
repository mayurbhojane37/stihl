import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // Import MatDialogRef
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(private dialogRef: MatDialogRef<MenuBarComponent>,private router:Router) {} // Inject MatDialogRef

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog
  }

  navigateToSignIn(){
    this.router.navigate(['sign-in']);
  }
}
