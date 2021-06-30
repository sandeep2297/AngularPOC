/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Customer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
  });

  it('should create CustomerService', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getCustomerData function', inject([CustomerService], (service: CustomerService) => {
    expect(service.getCustomerData).toBeTruthy();
  }));

  it('getCustomerData should return json data', inject([CustomerService, HttpTestingController], (service: CustomerService, httpMock: HttpTestingController) => {
    const customerDataJson = {
      "customerId": "14862",
      "customerName": "Aman Rathore",
      "gender": "Male",
      "age": "24",
      "city": "Kanpur",
      "state": "Uttar Pradesh"
   }
    service.getCustomerData().subscribe(result => {
        expect(result).toEqual(customerDataJson);
    });
    const request = httpMock.expectOne(`../../../assets/customer.json`);
    expect(request.request.method).toBe('GET');
    request.flush(customerDataJson);
    }));


});
