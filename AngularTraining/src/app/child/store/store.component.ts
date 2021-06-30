import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  
  storeData: any;
  storeService: StoreService;
  toggle = false;
  phoneTemp: any;

  constructor(private http: HttpClient) { 
    this.storeService = new StoreService(this.http);
  }

  ngOnInit() {
    this.loadStoreDetails();
  }

  loadStoreDetails() {
    this.storeService.getStoreData().subscribe((data) => {
      this.storeData = data;
      this.storeData.doe = new Date(2021, 5, 14);
    });
  }

}
