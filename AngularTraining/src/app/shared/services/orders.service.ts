import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class OrdersService {

constructor(private http: HttpClient) { }

getOrdersData(): Observable<any> {
  return this.http.get("../../../assets/orders.json");
}

}
