import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient, private router: Router) {}

    baseUrl = environment.baseUrl;
  deleteEmployee(employeeId) {
    const url = this.baseUrl + '/api/main/' + employeeId;
    return this.http.delete(url)
      .pipe(map(
        (res: Response) => {
          // const data = res.json;
          console.log(`Response for delete employee from employee service: ${JSON.stringify(res)}`);
          return res;
        }
      ));
  }

    getAllEmployees() {
      return this.http.get(this.baseUrl + '/api/main')
        .pipe(
          map((res) => {
            console.log(`get all employees output in emp service: ${JSON.stringify(res)}`);
            return res;
          }
        ));
    }

    getEmployeeById(employeeId: String) {
      return this.http.get(this.baseUrl + '/api/main/' + employeeId)
        .pipe(
          map((res: Response) => {
            const data = res.json;
            console.log('get employee by id');
            console.log(data);
            return res;
          }
        ));
    }

    updateEmployee(employee: any) {
      return this.http.put(this.baseUrl + '/api/main/' + employee._id, employee)
        .pipe(
        map(
          (response) => {
            return 'Updated';
          }
        ));
    }
  createEmployee(employee) {
    const body = {
      firstName : employee.firstName,
      lastName : employee.lastName,
      email : employee.email,
      baseSal : employee.baseSal,
      medical : employee.medical,
      bonus: employee.bonus,
      tax : employee.tax,
      finalSal : employee.baseSal - employee.medical - employee.tax + employee.bonus
    };

    return this.http.post(this.baseUrl + '/api/add', body, httpOptions)
      .pipe(
        map((res: Response) => {
            const data = res.json;
            console.log(data);
            return data;
          }
        ));

  }
  }

