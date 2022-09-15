const { conn, sql } = require("../connect");
module.exports = function () {
  this.getAll = async function (result) {
    var pool = await conn;
    var sqlString = "SELECT * FROM Users";
    return await pool.request().query(sqlString, function (err, data) {
      if (data.recordset.length > 0) {
        result("Get Thanh Cong Tat Ca Users", false, data.recordset);
      } else {
        result(true, null);
      }
    });
  };

  this.getOneUser = async (id, result) => {
    var pool = await conn;
    var sqlString = "SELECT * FROM Users WHERE iduser = @varId";
    return await pool
      .request()
      .input("varId", sql.Int, id)
      .query(sqlString, (err, data) => {
        if (data.recordset.length > 0) {
          result(false, data.recordset[0]);
        } else {
          result(true, null, "Users nay khong ton tai");
        }
      });
  };

  this.addUser = async (newData, result) => {
    var pool = await conn;
    var sqlString =
      "INSERT INTO Users (avatar, name, age, username, password, address, phone) VALUES(@avatar, @name, @age, @username, @password, @address, @phone)";
    return await pool
      .request()
      .input("avatar", sql.NVarChar, newData.avatar)
      .input("name", sql.NVarChar, newData.name)
      .input("age", sql.NVarChar, newData.age)
      .input("username", sql.NVarChar, newData.username)
      .input("password", sql.NVarChar, newData.password)
      .input("address", sql.NVarChar, newData.address)
      .input("phone", sql.NVarChar, newData.phone)
      .query(sqlString, (err, data, msg) => {
        if (!err) {
          result(false, newData, "Them Thanh Cong Users");
        } else {
          result(true, null, "Them That Bai Users");
        }
      });
  };

  this.updateUserById = async (id, newData, result) => {
    var pool = await conn;
    var sqlString =
      "UPDATE Users SET avatar=@avatar , name=@name, age= @age, username=@username, password=@password, address=@address, phone=@phone WHERE iduser=@id";
    return await pool
      .request()
      .input("avatar", sql.NVarChar, newData.avatar)
      .input("name", sql.NVarChar, newData.name)
      .input("age", sql.NVarChar, newData.age)
      .input("username", sql.NVarChar, newData.username)
      .input("password", sql.NVarChar, newData.password)
      .input("address", sql.NVarChar, newData.address)
      .input("phone", sql.NVarChar, newData.phone)
      .input("id", sql.Int, id)
      .query(sqlString, (err, data, msg) => {
        if (!err) {
          result(false, newData, "Update Thanh Cong Users");
        } else {
          result(true, null, "Update That Bai Users");
        }
      });
  };

  this.deleteUserById = async (id, result) => {
    var pool = await conn;
    var sqlString = "DELETE FROM Users WHERE iduser=@id";
    return await pool
      .request()
      .input("id", sql.Int, id)
      .query(sqlString, (err, data) => {
        if (!err) {
          result("Xoa Thanh Cong User", null);
        } else {
          result("Xoa That Bai User", true);
        }
      });
  };
};
