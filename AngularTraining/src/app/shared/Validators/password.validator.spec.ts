import { FormControl } from "@angular/forms";
import { PasswordValidator } from "./password.validator";

describe('PasswordValidator', () => {
    const control = new FormControl('input');
  
    it('should return null if value has passed custom validations', () => {
      control.setValue('Password@12345');
      expect(PasswordValidator(control)).toBeNull();
    });
  
    it('should return error object if value has failed custom validations', () => {
      control.setValue('password@123');
      expect(PasswordValidator(control)).toEqual({ 'weak': true, 'message': 'Password should contain atleast 1 Uppercase letter, 1 lowercase letter, 1 number and 1 special character' });
    });
  });