import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService) { }
  
    ngOnInit() {
      console.log(this.auth.handleAuthentication());
      console.log(this.auth.isAuthenticated());
      //console.log(this.auth.());
    }
  
  
}
