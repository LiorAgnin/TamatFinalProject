import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopBagComponent } from './shop-bag/shop-bag.component';
import { routes } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { ProductsComponent } from './products/products.component';
// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'order', component: OrdersComponent },
//   { path: 'profile', component: ProfileComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    OrdersComponent,
    ProfileComponent,
    ShopBagComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
