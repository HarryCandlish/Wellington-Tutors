const express = require("express");
const db = require("../db/tutors");
const router = express.Router();

router.use(express.json());

const { getOneTutor, getAllTutors, getTutorByTech } = require("../db/tutors");

// GET /api/v1/teachers

router.get("/", (req, res) => {
  getAllTutors()
    .then(tutors => {
      res.json(tutors);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/tutors/:id", (req, res) => {
  const tutorId = req.params.id;
  getOneTutor(tutorId)
    .then(tutor => {
      res.json(tutor);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/tutors/:tech_id", (req, res) => {
  let id = req.params.id;
  getTutorByTech(techId)
    .then(tutors => {
      res.json(tutors);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
