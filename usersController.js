const express = require("express");
const userData = require("./data.json")
const controller = express.Router();

controller.get("/", (req, res) => {
    res.send(userData);
})

module.exports = controller;