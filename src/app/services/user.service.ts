import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  onSubmit(amount: any, pvalue: any, interest: any, tenure: any) {
    throw new Error("Method not implemented.");
  }
  obj: any;
  emiobj;
  // apiUrl: string = 'http://localhost:3000/users';
  apiUrl: string = 'http://10.117.189.155:8080/ing-mortgage/api/login';
  public isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }
  getUser(emailId, password) {
    this.obj = {
      "emailId": emailId,
      "password": password
    }
    return this.http.post(this.apiUrl, this.obj);
  }
  getdata() {
    return this.http.get(this.apiUrl);
  }

  //Fetch Mortgage info
  fetchMortgage() {
    return this.http.get("http://10.117.189.176:8080/ing-mortgage/customers/1/mortgages");
  }
  calculate(depositAmount, propertyValue, rateofInterest, term) {
    this.emiobj = {
      "depositAmount": depositAmount,
      "propertyvalue": propertyValue,
      "rateOfInterest": rateofInterest,
      "term": term
    }
    return this.http.post("http://10.117.189.176:8080/ing-mortgage/emi", +this.emiobj);
  }
}
