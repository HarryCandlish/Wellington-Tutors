const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../db/users");

router.use(express.json());

// GET /api/v1/users

router.get("/users", (req, res) => {
  getAllUsers()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
