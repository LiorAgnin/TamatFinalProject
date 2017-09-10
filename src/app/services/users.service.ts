import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
@Injectable()
export class UsersService {

  private url: string;
  postsUrl: string;
  constructor( @Inject(Http) private http: Http) {
      this.url= "http://localhost:50332/api/s";
  }
  Get(routing: string) {
      return this.http.get(this.url + routing)
  }
  Post(routing: string,body: any) {
      return this.http.post(this.url + routing, body).map((res) => { return res.json() })
  }

}
