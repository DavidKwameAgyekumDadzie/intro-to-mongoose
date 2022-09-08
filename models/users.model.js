const { Schema, model } = require("mongoose");

//in javaScript class(is not the object itself) is a blueprint used to create the object.
const userSchema = new Schema({
  //if the response you require from the user is mandatory open the object with curly bracket , instead of doing it like: middleName: String,
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,

  lastName: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  gender: String,
});

//we export with name we give to the database
module.exports = model("User", userSchema);