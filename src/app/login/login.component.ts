import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UsersService } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { error } from 'util';


@Component({ templateUrl: 'login.component.html', styleUrls: ['./login.component.css'] })
export class LoginComponent implements OnInit {
  @Output() isUserLoggedIn: EventEmitter<any> = new EventEmitter<boolean>();
  user: any = User;
  loading = false;
  response: any;
  submitted = false;
  returnUrl: string;
  emailId: string;
  password: string;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private users: UsersService
  ) { }
  ngOnInit() {
    this.users.isUserLoggedIn && this.router.navigate(['/home']);
  }

  validateUser(arr) {
    return new Promise((resolve, reject) => {
      let valid = false;
      arr.forEach(v => {
        if (v.emailId == this.user.emailId && v.password == this.user.password) {
          valid = true;
          resolve();
        }
      });
      !valid && reject();
    });
  }
  onSubmit() {
    console.log(this.user.emailId);
    this.submitted = true;

    this.response = this.users.getUser(this.user.emailId, this.user.password).subscribe(response => {
      console.log("inside", response);
      this.isUserLoggedIn.emit(true);
      this.router.navigate(['/home']);
    });

  };

  // this.users.getUser().subscribe(res => {
  //   this.validateUser(res).then(r => {
  //     this.isUserLoggedIn.emit(true);
  //     this.router.navigate(['/home']);
  //     this.users.isUserLoggedIn = true;
  //   }, e => {
  //     alert('Email id or Password is not valid');
  //   });
  // });
}
