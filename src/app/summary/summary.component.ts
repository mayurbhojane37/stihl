import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  dialogRef: any;

  constructor(private dialog: MatDialog,private router:Router) {}


  navigateTo(route: string) {
    this.router.navigate([route]);
  }


  openCartDialog() {
    this.dialogRef = this.dialog.open(PopupComponent, {
      width: '20%', 
      height: '40%', 
      //position: { right: '0' } //dialog right genyasathi
    });

  
    setTimeout(() => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    }, 4000);
  }
}
