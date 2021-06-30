import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrdersComponent } from './orders/orders.component';
import { StoreComponent } from './store/store.component';
import {AuthGuardService as AuthGuard} from '../shared/services/AuthGuard.service';
import { FiboComponent } from './fibo/fibo.component';
import { RxjsOperatorsComponent } from './rxjsOperators/rxjsOperators.component';
import { AddEmployeeComponent } from './addEmployee/addEmployee.component';

const routes: Routes = [
  
  { path: '', component: ChildComponent, 
  // canActivate: [AuthGuard] 
},

  {path: 'customers', component: CustomersComponent, 
  // canActivate: [AuthGuard] 
},

  {path: 'orders', component: OrdersComponent, 
  // canActivate: [AuthGuard] 
},

  {path: 'store', component:StoreComponent,
  //  canActivate: [AuthGuard] 
  },

  {path: 'employee', component:EmployeeComponent, 
  // canActivate: [AuthGuard] 
},

{path: 'fibo', component:FiboComponent
// canActivate: [AuthGuard] 
},

{path: 'rxjs', component:RxjsOperatorsComponent
// canActivate: [AuthGuard] 
},

{path: 'addEmployee', component:AddEmployeeComponent
// canActivate: [AuthGuard] 
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
