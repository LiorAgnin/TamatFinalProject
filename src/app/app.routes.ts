import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopBagComponent } from './shop-bag/shop-bag.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductsComponent } from './products/products.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order', component: OrdersComponent , canActivate: [AuthGuard] },
  { path: 'profile',component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'products',component: ProductsComponent , canActivate: [AuthGuard]},
];