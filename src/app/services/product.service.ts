import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
@Injectable()
export class ProductService {

  private url: string;
  postsUrl: string;
  constructor( @Inject(Http) private http: Http) {
      this.url= "http://localhost:64619/api/Products";
  }
  Get() {
      return this.http.get(this.url)
  }
  Post(body: any) {
      return this.http.post(this.url, body).map((res) => { return res.json() })
  }

}
