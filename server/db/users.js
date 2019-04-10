const connection = require("./connection");

function getAllUsers(testDb) {
  const db = testDb || connection;
  return db("users").select();
}

function getOneUser(id, testDb) {
  const db = testDb || connection;
  return db(user)
    .where("id", id)
    .first();
}

module.exports = {
  getAllUsers,
  getOneUser
};
