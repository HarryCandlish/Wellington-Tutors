const connection = require("./connection");

function techExists(technology, testDb) {
  const db = testDb || connection;

  return db("tech")
    .where("technology", technology)
    .then(tech => tech.length > 0);
}

function getTechByTechnology(technology, testDb) {
  const db = testDb || connection;

  return db("tech")
    .where("technology", technology)
    .first();
}

module.exports = {
  techExists,
  getTechByTechnology
};
