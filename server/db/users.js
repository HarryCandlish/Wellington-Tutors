const connection = require("./connection");

function userExists(name, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("name", name)
    .then(users => users.length > 0);
}

function getUserByName(name, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("name", name)
    .first();
}

module.exports = {
  userExists,
  getUserByName
};
