import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

status = new BehaviorSubject('Welcome to AM Super Market');

constructor() { }

public setStatus(message: string) {
  this.status.next(message);
}

public getStatus(): Observable<any> {
  return this.status.asObservable();
}

}
