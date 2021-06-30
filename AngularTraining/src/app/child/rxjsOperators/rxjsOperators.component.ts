import { Component, OnInit } from '@angular/core';
import { concat, throwError } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map, reduce, filter, count, catchError, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-rxjsOperators',
  templateUrl: './rxjsOperators.component.html',
  styleUrls: ['./rxjsOperators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  count() {
    let output = this.getInput().pipe(
     count()
    )
    output.subscribe((count) => {
      console.log("Number of elements ", count);
    })
 }

  sum() {
     let output = this.getInput().pipe(
      reduce((a,b) => a+b, 0)
     )
     output.subscribe((sum) => {
       console.log("Total Sum ", sum);
     })
  }

  filterEvenNumbers() {
    let output = this.getInput().pipe(
      filter(x => x%2 == 0),
      reduce((a,b) => a+b, 0)
     )
     output.subscribe((sum) => {
       console.log("Sum of Even Numbers ", sum);
     })
  }

  sumofSquares() {
    let output = this.getInput().pipe(
      map(x => x*x),
      reduce((a,b) => a+b, 0)
     )
     output.subscribe((sum) => {
       console.log("Sum of Squares ", sum);
     })
  }

  throwError() {
    const error = {
      errorCode: '400 Bad Request',
      message: 'This is an error'
    }
    let newInput = throwError(error);
    let output = newInput.pipe(
      catchError(x => of(x))
     )
     output.subscribe((error) => {
       console.log("Error Occurred ", JSON.stringify(error));
     })
  }

  sumofFirst5Numbers() {
    let output = this.getInput().pipe(
      take(5),
      reduce((a,b) => a+b, 0)
     )
     output.subscribe((sum) => {
       console.log("Sum of First 5 numbers ", sum);
     })
  }

  getInput() : Observable<any> {
    return concat(
      of(1,2,3),
      of(4,5,6),
      of(7,8,9,10)
    )
  }

}
