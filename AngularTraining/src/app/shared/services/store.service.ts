import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class StoreService {

constructor(private http: HttpClient) { }

getStoreData(): Observable<any> {
  return this.http.get("../../../assets/store.json");
}

}
