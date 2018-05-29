module.exports = function(mongoose) {

  var EmployeeSchema = new mongoose.Schema ({
    firstName : String,
    lastName : String,
    email : String,
    baseSal : Number,
    medical : Number,
    tax : Number,
    bonus: Number,
    finalSal : Number
  }, {collection: 'employee'});

  return EmployeeSchema;
};
