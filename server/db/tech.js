const connection = require("./connection");
const knex = require("knex");

function getAllTech(testDb) {
  const db = testDb || connection;
  return db("tech").select();
}

function getOneTech(id, testDb) {
  const db = testDb || connection;
  return db(tech)
    .where("id", id)
    .first();
}

function getTechByTechnology(technology, testDb) {
  const db = testDb || connection;

  return db("tech")
    .where("technology", technology)
    .first();
}

module.exports = {
  getAllTech,
  getTechByTechnology,
  getOneTech
};
