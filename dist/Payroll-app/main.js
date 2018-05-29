(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/employee-add/employee-add.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/employee-add/employee-add.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#inputData {\n  margin-top: 85px;\n  margin-bottom: 85px;\n}\n"

/***/ }),

/***/ "./src/app/Components/employee-add/employee-add.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/employee-add/employee-add.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\" [routerLink]=\"['/main']\">\n        <b>Home</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/login']\"\n         >\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container \" id=\"inputData\">\n  <form (ngSubmit) = \"createEmployee()\" name=\"model.myform\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input\n        [(ngModel)] = \"employee.firstName\" type=\"text\" required class=\"form-control\" id=\"firstName\" placeholder=\"Alice\"\n        name=\"firstName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)] = \"employee.lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" required placeholder=\"Marley\"\n        name=\"lastName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)] = \"employee.email\" type=\"email\" class=\"form-control\" id=\"email\"\n             placeholder=\"alice.marley@yahoo.com\"\n        required\n        name=\"email\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"baseSalary\">Base Salary</label>\n      <input [(ngModel)] = \"employee.baseSal\" type=\"number\" class=\"form-control\" id=\"baseSalary\" placeholder=\"4000\"\n        required\n        name=\"baseSal\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"medical\">Medical Deduction</label>\n      <input [(ngModel)] = \"employee.medical\" type=\"number\" class=\"form-control\" id=\"medical\" placeholder=\"600\" required\n             name=\"medical\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bonus\">Bonus</label>\n      <input [(ngModel)] = \"employee.bonus\" type=\"number\" class=\"form-control\" id=\"bonus\" placeholder=\"500\" required\n        name=\"bonus\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"tax\">Tax Deduction</label>\n      <input [(ngModel)] = \"employee.tax\" type=\"number\" class=\"form-control\" id=\"tax\" placeholder=\"900\" required\n             name=\"tax\"\n      />\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Add Employee</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/main']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/Components/employee-add/employee-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/employee-add/employee-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function() { return EmployeeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(_employeeService, router) {
        this._employeeService = _employeeService;
        this.router = router;
        this.employee = {};
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
    };
    EmployeeAddComponent.prototype.createEmployee = function () {
        var _this = this;
        console.log('In add emp comp');
        console.log();
        this._employeeService.createEmployee(this.employee)
            .subscribe(function (data) {
            _this.router.navigate(['/main']);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-add',
            template: __webpack_require__(/*! ./employee-add.component.html */ "./src/app/Components/employee-add/employee-add.component.html"),
            styles: [__webpack_require__(/*! ./employee-add.component.css */ "./src/app/Components/employee-add/employee-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#inputData {\n  margin-top: 85px;\n  margin-bottom: 85px;\n}\n"

/***/ }),

/***/ "./src/app/Components/employee-edit/employee-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/employee-edit/employee-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\" [routerLink]=\"['/main']\">\n        <b>Home</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a\n        class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-log-out\" [routerLink] = \"['/main']\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\" id=\"inputData\">\n\n  <form (ngSubmit)=\"updateEmployee()\" name=\"model.myform\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)] = \"employee.firstName\" type=\"text\" required class=\"form-control\" id=\"firstName\" placeholder=\"Alice\"\n        name=\"firstName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)] = \"employee.lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" required placeholder=\"Marley\"\n        name=\"lastName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)] = \"employee.email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice.marley@yahoo.com\"\n        required\n        name=\"email\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"baseSalary\">Base Salary</label>\n      <input [(ngModel)] = \"employee.baseSal\" type=\"number\" class=\"form-control\" id=\"baseSalary\" placeholder=\"4000\"\n        required\n        name=\"baseSal\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"medical\">Medical Deduction</label>\n      <input [(ngModel)] = \"employee.medical\" type=\"number\" class=\"form-control\" id=\"medical\" placeholder=\"600\"\n        required\n        name=\"medical\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bonus\">Bonus</label>\n      <input [(ngModel)] = \"employee.bonus\" type=\"number\" class=\"form-control\" id=\"bonus\" placeholder=\"500\" required\n             name=\"bonus\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"tax\">Tax Deduction</label>\n      <input [(ngModel)] = \"employee.tax\" type=\"number\" class=\"form-control\" id=\"tax\" placeholder=\"900\" required\n        name=\"tax\"\n      />\n    </div>\n\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Update Employee</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/main']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<script src=\"http://code.jquery.com/jquery-latest.js\"></script>\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n"

/***/ }),

/***/ "./src/app/Components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(activatedRoute, _employeeService, router) {
        this.activatedRoute = activatedRoute;
        this._employeeService = _employeeService;
        this.router = router;
        this.employee = {};
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('IN edit component');
            _this._id = params['employeeId'];
            console.log(_this._id);
            console.log('Above is the id');
            _this.getEmployee();
        });
    };
    EmployeeEditComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this._employeeService.deleteEmployee(this._id)
            .subscribe(function (data) { return _this.router.navigate(['/main']); }, function (error) { return console.log(error); });
    };
    EmployeeEditComponent.prototype.updateEmployee = function () {
        var _this = this;
        console.log('I am inside update employee');
        console.log(this.employee);
        this._employeeService.updateEmployee(this.employee)
            .subscribe(function (data) {
            console.log('I am in update employee');
            _this.router.navigate(['/main']);
        }, function (error) { return console.log(error); });
    };
    EmployeeEditComponent.prototype.getEmployee = function () {
        var _this = this;
        this._employeeService.getEmployeeById(this._id)
            .subscribe(function (data) {
            _this.employee = data;
            console.log('in getEmployee');
            console.log(JSON.stringify(data));
        }, function (error) { return console.log(error); });
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/Components/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/Components/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ndiv.container {\n  margin-top: 100px;\n  margin-left : 20px;\n  margin-right : 10px;\n}\n\nbutton#add-btn {\n  margin-bottom: 20px;\n}\n"

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-light navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Home</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/login']\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row \">\n    <table class=\"table table-striped custab\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Net Salary</th>\n        <th class=\"text-center\">Actions to perform</th>\n      </tr>\n      </thead>\n      <tr *ngFor= \"let employee of employees; let i = index;\">\n        <td><a [routerLink]=\"['/main',employee._id]\">{{employee.firstName}}  {{employee.lastName}}</a></td>\n        <td>{{employee.email}}</td>\n        <td>{{employee.finalSal}}</td>\n        <td class=\"text-center\"><a class='btn btn-info btn-xs' [routerLink]=\"['/main',employee._id]\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a>\n          <a class='btn btn-danger btn-xs' (click) = \"deleteEmployee(employee._id,i) \"><span class=\"glyphicon glyphicon-remove\"></span>Delete</a>\n        </td>\n      </tr>\n    </table>\n    <button type=\"button\"id=\"add-btn\"  class=\"btn btn-primary\" [routerLink]=\"['/add']\"><b>+</b> Add new employee</button>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_employeeService, router) {
        this._employeeService = _employeeService;
        this.router = router;
        this.employees = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getAllEmployees()
            .subscribe(function (data) {
            console.log(data);
            _this.employees = data;
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.deleteEmployee = function (id, i) {
        var _this = this;
        this._employeeService.deleteEmployee(id)
            .subscribe(function (data) {
            console.log("index to be deleted: " + i);
            console.log("Element to be deleted: " + _this.employees[i]);
            _this.employees.splice(i, 1);
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
        }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:40px\">\n  <div class=\"col-md-8\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\"><h3 class=\"panel-title\"><strong>Employee Payrolls Management System</strong></h3></div>\n      <div class=\"panel-body\">\n        <form role=\"form\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\"  placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"Password\">\n          </div>\n          <button type=\"button\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/main']\">Log In</button>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<label>username</label>\n<!--<input [(ng-model)] = \"username\" placeholder = \"alice\"/>-->\n<input placeholder = \"Alice\">\n<br/>\n<label>password</label>\n<input type = \"password\" placeholder=\"343#$@@2\"/>\n<br/>\n<label>Validate password</label>\n<input type = \"password\" placeholder=\"343#$@@2\"/>\n<br/>\n<button>login</button>\n"

/***/ }),

/***/ "./src/app/Components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/Components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/employee-edit/employee-edit.component */ "./src/app/Components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _Components_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/employee-add/employee-add.component */ "./src/app/Components/employee-add/employee-add.component.ts");






var APP_ROUTES = [
    { path: '', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'main', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'add', component: _Components_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAddComponent"]
    },
    {
        path: 'main/:employeeId', component: _Components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeEditComponent"]
    }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register </a>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Payroll Project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/employee-add/employee-add.component */ "./src/app/Components/employee-add/employee-add.component.ts");
/* harmony import */ var _Components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/employee-edit/employee-edit.component */ "./src/app/Components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _Components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _Components_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeAddComponent"],
                _Components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["Routing"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    EmployeeService.prototype.deleteEmployee = function (employeeId) {
        var url = this.baseUrl + '/api/main/' + employeeId;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            // const data = res.json;
            console.log("Response for delete employee from employee service: " + JSON.stringify(res));
            return res;
        }));
    };
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.baseUrl + '/api/main')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            console.log("get all employees output in emp service: " + JSON.stringify(res));
            return res;
        }));
    };
    EmployeeService.prototype.getEmployeeById = function (employeeId) {
        return this.http.get(this.baseUrl + '/api/main/' + employeeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            var data = res.json;
            console.log('get employee by id');
            console.log(data);
            return res;
        }));
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.baseUrl + '/api/main/' + employee._id, employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return 'Updated';
        }));
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        var body = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            baseSal: employee.baseSal,
            medical: employee.medical,
            bonus: employee.bonus,
            tax: employee.tax,
            finalSal: employee.baseSal - employee.medical - employee.tax + employee.bonus
        };
        return this.http.post(this.baseUrl + '/api/add', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            var data = res.json;
            console.log(data);
            return data;
        }));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://employee-compensation.herokuapp.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rishabkhandelwal/Desktop/Employee-Compensation-Portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map