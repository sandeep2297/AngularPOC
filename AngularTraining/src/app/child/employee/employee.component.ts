import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeData: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployeeDataAsPromise()
    .then((data) => {
      this.employeeData = data;
    })
    .catch((error)=> {
     console.log(JSON.stringify(error));
    });
  }

  fetchEmployeeDataAsPromise() : Promise<any> {
    return this.employeeService.getEmployeeData().toPromise();
  } 

}
