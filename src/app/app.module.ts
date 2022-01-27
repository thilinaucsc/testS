import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllInterestComponent } from './components/get-all-interest/get-all-interest.component';
import { GetCustomerInterestComponent } from './components/get-customer-interest/get-customer-interest.component';
import { GetLastInterestComponent } from './components/get-last-interest/get-last-interest.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllInterestComponent,
    GetCustomerInterestComponent,
    GetLastInterestComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
