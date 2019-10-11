import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { MessageService } from 'primeng/components/common/messageservice';
import { UsersService } from '../services/user.service';

@Component({
  templateUrl: 'register.component.html', styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  val4: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient, private messageService: MessageService, private userreg: UsersService) { }
  user: any = User;
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Registration Done Successfully' });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      mob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  conformationMsg: string = "New User Added Successfully";
  isAdded: boolean = false;
  userObj = {};
  onSubmit(user) {
    this.submitted = true;
    this.userObj = {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "mob": user.mob,
      "username": user.username,
      "password": user.password
    }

    this.http.post("http://localhost:3000/users", this.userObj).subscribe((res: Response) => {
    })
    this.loading = true;
  }
  register() {

  }
}
