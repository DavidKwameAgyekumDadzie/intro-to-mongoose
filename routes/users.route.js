const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} = require("../controllers/users.controllers");

const userRouter = router();


userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
