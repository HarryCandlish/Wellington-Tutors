const express = require("express");
const db = require("../db/tech");
const router = express.Router();

router.use(express.json());

const { getAllTech, getOneTech, getTechByTechnology } = require("../db/tech");

// GET /api/v1/technologies

router.get("/technologies", (req, res) => {
  getAllTech()
    .then(tech => {
      res.json(tech);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/technologies/:id", (req, res) => {
  const techId = req.params.id;
  getOneTech(techId)
    .then(tech => {
      res.json(tech);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/technologies/:technology", (req, res) => {
  getTechByTechnology(req.params.technologies)
    .then(tech => {
      res.json(tech);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
