import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  viaButton = false;

  constructor() { }
  
  setViaButtonClick() {
    this.viaButton = true;
  }
  
  getButtonClickStatus(): boolean {
    return this.viaButton;
  }

}
