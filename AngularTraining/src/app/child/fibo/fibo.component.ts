import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.component.html',
  styleUrls: ['./fibo.component.css']
})
export class FiboComponent implements OnInit {

  fibo = [0,1,1,2,3,5,8];

  constructor() { }

  ngOnInit() {
    console.log("Original Array: ",this.fibo);   
  }

  addElements() {
    this.fibo.push(this.fibo[this.fibo.length-1] + this.fibo[this.fibo.length-2]);
    console.log("New Array: ",this.fibo);
  }

  resetPureFiboSum() {
    this.fibo = this.fibo.slice();
  }

}
