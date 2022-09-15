var User = require("../models/user.model");
var model = new User();
exports.getList = async function (req, res) {
  model.getAll(function (msg, err, data) {
    res.send({ message: msg, result: data, error: err });
  });
};

exports.getByIdUser = (req, res) => {
  model.getOneUser(req.params.id, (err, data, msg) => {
    res.send({ result: data, error: err, message: msg });
  });
};
exports.addNewUser = (req, res) => {
  model.addUser(req.body, (err, data, msg) => {
    res.send({ result: data, error: err, message: msg });
  });
};
exports.updateByIdUser = async (req, res) => {
  var id = req.params.id;
  model.updateUserById(id, req.body, (err, data, msg) => {
    if (!id) {
      res.send({ message: "Khong tim thay id" });
    }
    res.send({ result: data, error: err, message: msg });
  });
};
exports.deleteByIdUser = async (req, res) => {
  model.deleteUserById(req.params.id, (err, data, msg) => {
    res.send({ result: data, error: err, message: msg });
  });
};
