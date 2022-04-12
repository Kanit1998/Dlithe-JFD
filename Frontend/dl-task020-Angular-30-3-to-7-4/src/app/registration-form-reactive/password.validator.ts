import{ AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl) {
    const password = control.get('pass');
    const cnfPassword =control.get('cnfpass');

    if (!password?.pristine && cnfPassword?.pristine){
        return null;
    }
    return password && cnfPassword && password.value !== cnfPassword.value
    ? { doNotMatch : true}
    : null;
}