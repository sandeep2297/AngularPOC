/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersService } from './orders.service';

describe('Service: Orders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    });
  });

  it('should create OrderService', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getOrdersData function', inject([OrdersService], (service: OrdersService) => {
    expect(service.getOrdersData).toBeTruthy();
  }));

  it('getOrdersData should return json data', inject([OrdersService, HttpTestingController], (service: OrdersService, httpMock: HttpTestingController) => {
    const ordersDataJson = {
    "orderId": "13265",
    "orderItem": "Soup Bowls",
    "date": "05/06/2021",
    "customerName": "Aman Rathore",
    "price": " Rs 700"
   }
    service.getOrdersData().subscribe(result => {
        expect(result).toEqual(ordersDataJson);
    });
    const request = httpMock.expectOne(`../../../assets/orders.json`);
    expect(request.request.method).toBe('GET');
    request.flush(ordersDataJson);
    }));

});
