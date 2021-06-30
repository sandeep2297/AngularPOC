/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('Service: Employee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
  });

  it('should create EmployeeService', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getEmployeeData function', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.getEmployeeData).toBeTruthy();
  }));

  it('getEmployeeData should return json data', inject([EmployeeService, HttpTestingController], (service: EmployeeService, httpMock: HttpTestingController) => {
    const employeeDataJson = {
    "employeeId": "E09406",
    "employeeName": "Sandeep Singh Bhandari",
    "gender": "Male",
    "age": "24",
    "doj": "20/05/2021",
    "city": "Dabolim",
    "state": "Goa"
   }
    service.getEmployeeData().subscribe(result => {
        expect(result).toEqual(employeeDataJson);
    });
    const request = httpMock.expectOne(`../../../assets/employee.json`);
    expect(request.request.method).toBe('GET');
    request.flush(employeeDataJson);
    }));

});
