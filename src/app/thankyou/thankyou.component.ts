import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  companyName=null;
  constructor(
    private _router: Router,
  ) {
    const navigation = this._router.getCurrentNavigation();
    this.companyName = navigation.extras || null;
   }
  
  ngOnInit(): void {
  }

}
