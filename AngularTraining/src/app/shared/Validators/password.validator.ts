import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): ValidationErrors | null {

    let hasNumber = /\d/.test(control.value);
    let hasUpperChars = /[A-Z]+/.test(control.value);
    let hasLowerChars = /[a-z]+/.test(control.value);
    let hasSpecialChars = /[!,@,#,$,%,^,&,*,+,_]+/.test(control.value);

    const strongPassword = hasNumber && hasUpperChars && hasLowerChars && hasSpecialChars;

    // console.log(strongPassword);

    // console.log(JSON.stringify(control.value));
    // console.log(JSON.stringify(control.value).length - 2);

    if ((JSON.stringify(control.value).length - 2) >= 10) {
        if (!strongPassword) {
            return { 'weak': true, 'message': 'Password should contain atleast 1 Uppercase letter, 1 lowercase letter, 1 number and 1 special character' };
        }
    }
    return null;
}