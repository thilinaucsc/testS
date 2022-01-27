import { Component, OnInit } from '@angular/core';
import {CommonRequest} from "../../model/commonRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  commonRequest: CommonRequest = new CommonRequest;

  constructor() { }

  ngOnInit(): void {
  }

  login() {

  }

  onSubmit() {
    this.login();
  }

}
