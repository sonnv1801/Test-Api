module.exports = (app) => {
  var userCotroller = require("../controllers/user.controller");
  app.get("/users", userCotroller.getList);

  app.get("/users/:id", userCotroller.getByIdUser);

  app.post("/users", userCotroller.addNewUser);

  app.put("/users/:id", userCotroller.updateByIdUser);

  app.delete("/users/:id", userCotroller.deleteByIdUser);
};
