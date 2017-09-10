import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {
  welcomeMessage: string = "from Angular 2"
  arOrder: IOrder[];
  OrderToEdit: IOrder;
  addOrder: IOrder;

  Id:number;
  UserId: number;
  Order_Date: string;
  Order_Price: number;
  ProductId: number;

  booli: boolean = false;
  booliCreate: boolean = false;

  constructor(private orderService : OrderService) { }

  get() {
      let req = this.orderService.Get();
      req.subscribe(rsp => { console.log(rsp.json()); })
  }
  ngOnInit() {
      let req = this.orderService.Get();
      req.subscribe(rsp => {
          this.arOrder = rsp.json();
          console.log(rsp.json());
      });
  }
  
  editForm(orderObj: IOrder) {
      this.OrderToEdit = orderObj;
      this.booli = !this.booli;
  }
  addSubmit() {
      const order = { UserId: this.UserId, Order_Date: this.Order_Date, Order_Price: this.Order_Price,ProductId:this.ProductId}
      let req = this.orderService.Post( order);
      req.subscribe(rsp => {
          console.log(rsp.json());
      });
  }
 /* editSubmit() {
      console.log(this.OrderToEdit);
      const order = { UserId: this.OrderToEdit.UserId, Order_Date: this.OrderToEdit.Order_Date, ProductId: this.OrderToEdit.ProductId, }
      let req = this.http.put("http://localhost:64619/api/Orders/" + this.OrderToEdit.Id, order);
      req.subscribe(rsp => {
          this.booli = false;
      });
  }
  deleteCustomer(Id: number) {
      let req = this.http.delete("http://localhost:64619/api/Orders/" + Id);
      req.subscribe(rsp => {
          console.log(rsp.json());
      });
  }*/
}
export interface IOrder {
  Id:number;
  UserId: number;
  Order_Date: string;
  Order_Price: number;
  ProductId: number;
}

