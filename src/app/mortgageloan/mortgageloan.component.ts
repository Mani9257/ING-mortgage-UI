import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mortgageloan',
  templateUrl: './mortgageloan.component.html',
  styleUrls: ['./mortgageloan.component.css']
})
export class MortgageloanComponent implements OnInit {
  statusCode: number;
  mortgage: Object;
  show;
  msg;
  amount;
  pvalue;
  interest;
  tenure;
  dataDisplay;

  //amount = new FormControl('');
  constructor(private Mservice: UsersService, private http: HttpClient) { }
  isUserloggedin = true;
  ngOnInit() {
    this.Mservice.fetchMortgage().subscribe(res => {
      let value = JSON.parse(JSON.stringify(res));
      this.mortgage = res;
      this.statusCode = Number(value.statusCode);

      console.log(this.mortgage);
      const code = this.statusCode;
      console.log("Status code is " + code);
    })
    this.Mservice.calculate(this.amount, this.pvalue, this.interest, this.tenure).subscribe(calc => {
      this.amount = calc;
      console.log("the amount is " + this.amount);
    })
  }
  logout() {
    this.isUserloggedin = false;
  }
  fetchMortgage() {
    if (this.statusCode == 200) {
      console.log("200");
      this.show = true;
      this.msg = false;
    }
    else {
      this.show = false;
      this.msg = true;
      console.log("Not");
    }
  }
  mortgageObj = {};
  onSubmit = function (mortgage) {
    this.mortgageObj = {
      "name": mortgage.cname,
      "pname": mortgage.pname,
      "propertyValue": mortgage.propertyValue,
      "depositAmount": mortgage.depositAmount,
      "rateOfInterest": mortgage.rateOfInterest,
      "term": mortgage.term
    }
    this.http.post("http://10.117.189.176:8080/ing-mortgage/emi", this.mortgageObj).subscribe((res: Response) => {
      console.log(res);
    })
  }
  // pvalue = document.getElementById("pvalue").Value();
  // damount = document.getElementById()
}
