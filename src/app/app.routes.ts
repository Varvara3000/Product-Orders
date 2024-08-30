import { Routes } from '@angular/router';
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";

export const routes: Routes = [
  {path:'',redirectTo:'order-list', pathMatch:'full'},
  {path:'order-list',component:OrderListComponent},

  {path:'order-list/:id',component:OrderDetailsComponent},
];
