const connection = require("./connection");

function getAllUsers(testDb) {
  const db = testDb || connection;
  return db(users).select();
}

module.exports = {
  getAllUsers
};
