module.exports = function() {

  var mongoose = require("mongoose");
  // var connectionString = 'mongodb://127.0.0.1:27017/test';
  // mongoose.connect(connectionString).then((response) => {
  //   console.log("Successfully connected to MongoDb:");
  // },
  //     (err) => {
  //       console.log('Failed to connect to MongoDb:' + err);
  //     });


  var EmployeeSchema = require("./employee.schema.server")(mongoose);
  var Employee = mongoose.model("Employee", EmployeeSchema);

  var api = {
    getAllEmployees : getAllEmployees,
    getEmployeeById : getEmployeeById,
    updateEmployee : updateEmployee,
    deleteEmployee : deleteEmployee,
    createEmployee : createEmployee
  };

  return api;


  function getAllEmployees() {
    return Employee.find();
  }

  function createEmployee(employee) {
    console.log("In emp model server");
    return Employee.create(employee);
  }

  function getEmployeeById(employeeId) {
    return Employee.findById({ _id : employeeId});
  }

  function updateEmployee(employeeId, employee) {
    delete employee._id;

    return Employee
      .update({_id : employeeId}, {
        $set: {
          firstName : employee.firstName,
          lastName : employee.lastName,
          email : employee.email,
          baseSal : employee.baseSal,
          medical : employee.medical,
          tax : employee.tax,
          finalSal : employee.baseSal - employee.medical - employee.tax
        }
      });
  }

  function deleteEmployee(employeeId){
    return Employee.remove({_id : employeeId});
  }

};
