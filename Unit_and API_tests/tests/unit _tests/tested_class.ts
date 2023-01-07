export class RegistrationForm {
  public firstName(first: any) {
    return first;
  }

  public lastName(last: any) {
    return last;
  }

  public email(namePart: any, atSign: any, domainPart: any) {
    return namePart + atSign + domainPart;
  }

  public phoneNumber(plus: any, num: any) {
    return plus + num;
  }

  public password(paswd: any) {
    return paswd;
  }

  public confirmPassword(paswd2: any) {
    return paswd2;
  }

  public age(age: any) {
    return age;
  }
}