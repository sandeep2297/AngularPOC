import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

interface Gender {
  gender: string;
}

@Component({
  selector: 'app-addEmployee',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeId: string = '';
  employeeName: string = '';
  gender: string = '';
  age: string = '';
  doj: string = '';
  city: string = '';
  state: string = '';
  maxDateValue = new Date();
  genders: Gender[];
  selectedGender: string = '';
  minDateValue = new Date(this.maxDateValue.getFullYear(), this.maxDateValue.getMonth() - 2, 1);


  constructor() {
    this.genders = [
      { gender: 'Male' },
      { gender: 'Female' },
      { gender: 'Others' },
    ];
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

  setDate(value: any) {
    let newDate: string = moment(value).format('l');
    this.doj = newDate;
  }

}
