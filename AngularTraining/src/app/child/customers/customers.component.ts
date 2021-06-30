import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerData : any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCustomerData();
  }

  loadCustomerData() {
    this.customerService.getCustomerData().subscribe((data) => {
      this.customerData = data;
    });
  }

}
