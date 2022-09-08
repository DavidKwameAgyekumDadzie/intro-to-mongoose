const { connect } = require("mongoose");

//anytime you put in a database, put in a try catch error so that when there is network problem it can give feedback
async function dbConnect() {
    try {
    //   await connect("mongodb://localhost:27017shop"); or 
      await connect("mongodb://localhost:27017" ,{dbName: "shop"});
      console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = {dbConnect};