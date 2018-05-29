import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee = {};
  _id: String;


  constructor(private activatedRoute: ActivatedRoute, private _employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log('IN edit component');

      this._id = params['employeeId'];
      console.log(this._id);
      console.log('Above is the id');
      this.getEmployee();
    });
  }

  deleteEmployee() {
    this._employeeService.deleteEmployee(this._id)
      .subscribe(
        (data: any) => this.router.navigate(['/main']),
        (error) => console.log(error)
      );
  }
  updateEmployee() {
    console.log('I am inside update employee');
    console.log(this.employee);
    this._employeeService.updateEmployee(this.employee)
      .subscribe(
        (data: any) => {
          console.log('I am in update employee');
          this.router.navigate(['/main'])},
        (error) => console.log(error));

  }
  getEmployee() {
    this._employeeService.getEmployeeById(this._id)
      .subscribe(
        (data: any) => {
          this.employee = data;
          console.log('in getEmployee');
          console.log(JSON.stringify(data)); },
        (error) => console.log(error)
      );
  }


}
