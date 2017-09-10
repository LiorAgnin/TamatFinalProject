import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-shop-bag',
  templateUrl: './shop-bag.component.html',
  styleUrls: ['./shop-bag.component.css'],
  providers: [OrderService]
})
export class ShopBagComponent implements OnInit {
  shopBag: any[];
  @Input() obj: any;
  constructor() { }

  ngOnInit() {
  }

}
