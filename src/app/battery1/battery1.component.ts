import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battery1',
  templateUrl: './battery1.component.html',
  styleUrls: ['./battery1.component.css']
})
export class Battery1Component {

  constructor(private router:Router){}


  navigatetobattery2(){
    this.router.navigate(['']);
  }
}
