import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  arProduct: IProduct[];
  ProductToEdit: IProduct;
  addProduct: IProduct;

  Id:number;
  Product_Name: string;
  Customer_Price: number;
  Market_Price: number;

  booli: boolean = false;
  booliCreate: boolean = false;

  constructor(private productService : ProductService) { }

  get() {
      let req = this.productService.Get();
      req.subscribe(rsp => { console.log(rsp.json()); })
  }
  ngOnInit() {
      let req = this.productService.Get();
      req.subscribe(rsp => {
          this.arProduct = rsp.json();
          console.log(rsp.json());
      });
  }
  editForm(productObj: IProduct) {
      this.ProductToEdit = productObj;
      this.booli = !this.booli;
  }
  addSubmit() {
      const product_Obj = { Product_Name: this.Product_Name, Customer_Price: this.Customer_Price, Order_Price: this.Market_Price,ProductId:this.Market_Price}
      let req = this.productService.Post(product_Obj);
      req.subscribe(rsp => {
          console.log(rsp.json());
      });
  }
 /* editSubmit() {
      console.log(this.ProductToEdit);
      const product_Obj = { Product_Name: this.ProductToEdit.Product_Name, Customer_Price: this.ProductToEdit.Customer_Price, Market_Price: this.ProductToEdit.Market_Price, }
      let req = this.http.put("http://localhost:64619/api/Products/" + this.ProductToEdit.Id, product_Obj);
      req.subscribe(rsp => {
          this.booli = false;
      });
  }
  deleteCustomer(Id: number) {
      let req = this.http.delete("http://localhost:64619/api/Products/" + Id);
      req.subscribe(rsp => {
          console.log(rsp.json());
      });
  }*/
}
export interface IProduct {
  Id:number;
  Product_Name: string;
  Customer_Price: number;
  Market_Price: number;
}

