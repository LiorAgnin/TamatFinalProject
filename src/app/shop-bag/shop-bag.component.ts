import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Users } from '../users';
@Component({
  selector: 'app-shop-bag',
  templateUrl: './shop-bag.component.html',
  styleUrls: ['./shop-bag.component.css']
})
export class ShopBagComponent implements OnInit {
userProfile : Users;
  constructor() { }

  ngOnInit() {
  }
}

