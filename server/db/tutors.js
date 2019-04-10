const connection = require("./connection");

function tutorExists(name, testDb) {
  const db = testDb || connection;

  return db("tutors")
    .where("name", name)
    .then(tutors => tutors.length > 0);
}

function getTutorByName(name, testDb) {
  const db = testDb || connection;

  return db("tutors")
    .where("name", name)
    .first();
}

function getTutorByTech(techId, testDb) {
  const db = testDb || connection;

  return db("tech")
    .join("tutors", "tutors.id", "tech.tutors_id")
    .where("tech.tech_id", techId)
    .select("name as technology");
}

module.exports = {
  tutorExists,
  getTutorByName,
  getTutorByTech
};
