exports.getUsers = (req, res) => {
  res.status(200).send("All Users");
};

exports.createUser = (req, res) => {
  res.status(200).send("Create User");
};

exports.updateUser = (req, res) => {
  res.status(200).send("Update User");
};

exports.deleteUser = (req, res) => {
  res.status(200).send("Delete User");
};
exports.getUser = (req, res) => {
  res.status(200).send("Get Single User");
};

