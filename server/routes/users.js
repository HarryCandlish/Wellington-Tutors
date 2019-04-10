const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

const { getOneUser, getAllUsers } = require("../db/users");

// GET/api/v1/users

router.get("/users", (req, res) => {
  getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  getOneUser(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
