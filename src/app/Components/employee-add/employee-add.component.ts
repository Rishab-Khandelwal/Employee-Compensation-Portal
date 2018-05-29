import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {


  employee = {};
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  createEmployee() {
    console.log('In add emp comp');

    console.log();
    this._employeeService.createEmployee(this.employee)
      .subscribe(
        (data : any) => {
          this.router.navigate(['/main']);
        },
        (error : any) => {
          console.log(error);
        }
      );
  }

}
