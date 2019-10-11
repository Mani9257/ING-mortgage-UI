import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statusCode: number;
  mortgage: Object;
  show;
  msg;
  data;
  constructor(private userservice: UsersService) { }

  ngOnInit() {
    this.userservice.getdata().subscribe(res => {
      this.data = res;
      console.log(res);
    })
    this.userservice.fetchMortgage().subscribe(res => {
      let value = JSON.parse(JSON.stringify(res));
      this.mortgage = res;
      this.statusCode = Number(value.statusCode);

      console.log(this.mortgage);
      const code = this.statusCode;
      console.log("Status code is " + code);
    })
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
}
