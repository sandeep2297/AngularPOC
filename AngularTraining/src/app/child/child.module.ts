import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { StoreComponent } from './store/store.component';
import { EmployeeComponent } from './employee/employee.component';
import { PhoneFormatPipe } from '../shared/pipes/phoneFormat.pipe';
import { FiboComponent } from './fibo/fibo.component';
import { ImpureFiboPipe } from '../shared/pipes/impureFibo.pipe';
import { PureFiboPipe } from '../shared/pipes/pureFibo.pipe';
import { RedBorderDirective } from '../shared/directives/redBorder.directive';
import { RxjsOperatorsComponent } from './rxjsOperators/rxjsOperators.component';
import { AddEmployeeComponent } from './addEmployee/addEmployee.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { HeaderModule } from 'ui-common-components-angular';



@NgModule({
  declarations: [
    ChildComponent,
    CustomersComponent,
    OrdersComponent,
    StoreComponent,
    EmployeeComponent,
    PhoneFormatPipe,
    FiboComponent,
    ImpureFiboPipe,
    PureFiboPipe,
    RedBorderDirective,
    RxjsOperatorsComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    HeaderModule
  ]
})
export class ChildModule { }
