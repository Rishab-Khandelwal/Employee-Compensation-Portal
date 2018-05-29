import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: any = [];
  constructor(private _employeeService: EmployeeService , private router: Router) { }


  ngOnInit() {
    this._employeeService.getAllEmployees()
      .subscribe(
        (data) => {
          console.log(data);
          this.employees = data; },
        (error) => console.log(error)
      );
  }

  deleteEmployee(id,i){
    this._employeeService.deleteEmployee(id)
      .subscribe(
        (data) => {
          console.log(`index to be deleted: ${i}`);
          console.log(`Element to be deleted: ${this.employees[i]}`);
          this.employees.splice(i,1);
          //delete this.employees[i];
          // for (var i = this.employees.length - 1; i >= 0; i--) {
          //   console.log(this.employees[i]._id);
          //   console.log("yes");
          //   console.log(id);
          //   if (this.employees[i]._id == id) {
          //     console.log("matched");
          //     this.employees.splice(i, 1);
          //   }
          // }
        },
        (error) => console.log(error)
      );

  }

}
