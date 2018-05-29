import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {HomeComponent} from './Components/home/home.component';
import {EmployeeEditComponent} from './Components/employee-edit/employee-edit.component';
import {EmployeeAddComponent} from './Components/employee-add/employee-add.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
  {path: '', component : LoginComponent},
  { path : 'login' , component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'main' , component : HomeComponent },
  {
    path: 'add', component: EmployeeAddComponent
  },
  {
    path: 'main/:employeeId', component : EmployeeEditComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

