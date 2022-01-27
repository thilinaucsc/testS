import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LoginUser} from "./model/loginUser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUserSubject: BehaviorSubject<LoginUser>;
  title = 'Interest Data';
  localStorage= localStorage.getItem('currentUser')

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem('currentUser')));
  }
}
