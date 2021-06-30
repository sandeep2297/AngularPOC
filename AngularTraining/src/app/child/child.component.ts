import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../shared/services/status.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private router: Router,
    private statusService: StatusService) {

  }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/orders']);
  }

  home() {
    this.statusService.setStatus('Welcome to Home');
    this.router.navigate(['/home']);
  }

  getMsg() {
    return this.statusService.getStatus();
  }



}
