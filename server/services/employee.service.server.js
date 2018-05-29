module.exports = function(app, models) {

  var employeeModel = models.employeeModel;


  app.get("/api/test", (req, res) => { res.send('server is alive and listening for requests');});
  app.post("/api/add", createEmployee);
  app.get("/api/main", getAllEmployees);
  app.delete("/api/main/:employeeId", deleteEmployee);
  app.get("/api/main/:employeeId", getEmployeeById);
  app.put("/api/main/:employeeId", updateEmployee);



  function deleteEmployee(req, res) {
    var employeeId = req.params.employeeId;

    employeeModel
      .deleteEmployee(employeeId)
      .then(function (stats) {
          console.log(`Delete output: ${JSON.stringify(stats)}`);
          res.json({message: 'Record deleted successfully'});
        },
        function(err) {
          res.sendStatus(404).send(err);
        });
  }


  function updateEmployee(req, res) {
    var employeeId = req.params.employeeId;
    var employee = req.body;

    console.log('server-side');
    employeeModel
      .updateEmployee(employeeId, employee)
      .then(function (stats) {
          console.log(`Record update: ${JSON.stringify(stats)}`);
          res.json({message: 'Record updated successfully'});
        },
        function(error) {
          res.sendStatus(404).send(error);
        });
  }

  function getEmployeeById(req, res) {
    var employeeId = req.params.employeeId;
    employeeModel
      .getEmployeeById(employeeId)
      .then(function (employee) {
          console.log(`employee object from Mongo: ${JSON.stringify(employee)}`);
          res.json(employee);
        },
        function (err) {
          res.statusCode(404).send(err);
        });
  }


  function createEmployee(req, res) {
    var employee = req.body;

    console.log(employee);
    employeeModel
      .createEmployee(employee)
      .then(function (employee) {
          res.json(employee);
        },
        function(err) {
          res.sendStatus(400).send(err);
        }
      );
  }

  function getAllEmployees(req, res) {
    console.log('Inside getAllEmployees');
    employeeModel
      .getAllEmployees()
      .then(function (employees){
          console.log(`get all employees output: ${JSON.stringify(employees)}`);
          res.json(employees);
        },
        function(err) {
          res.sendStatus(404).send(err);
        }
      );

  }


};
