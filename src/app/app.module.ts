import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {Routing} from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { EmployeeAddComponent } from './Components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import {EmployeeService} from './services/employee.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, Routing , HttpClientModule
  ],
  providers: [EmployeeService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
