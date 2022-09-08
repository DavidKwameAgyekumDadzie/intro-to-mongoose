const express = require("express");
const {dbConnect} = require("./config/dbConnect");
const userRouter = require("./routes/users.route");

const app = express();


app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server");
});

app.use("/users", userRouter);

async function start() {
    await dbConnect();
    
    app.listen(4001, (err) => {
        console.log("Server running on http://localhost:4000");
    });
}

start();