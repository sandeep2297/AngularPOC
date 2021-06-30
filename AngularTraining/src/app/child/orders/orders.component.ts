import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:  [ OrdersService ]
})
export class OrdersComponent implements OnInit {
  
  ordersData: any;

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrdersData().subscribe((data) => {
      this.ordersData = data;
    });
  }

}
