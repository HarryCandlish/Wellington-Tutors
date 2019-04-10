const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

const { getUserByName } = require("../db/users");

// GET/api/v1/users

router.get("/:name", (req, res) => {
  getUserByName(req.params.name)
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
