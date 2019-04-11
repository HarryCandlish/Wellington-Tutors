const connection = require("./connection");

function getAllTutors(testDb) {
  const db = testDb || connection;
  return db("tutors").select();
}

function getOneTutor(id, testDb) {
  const db = testDb || connection;
  return db(tutor)
    .where("id", id)
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
  getAllTutors,
  getOneTutor,
  getTutorByTech
};
