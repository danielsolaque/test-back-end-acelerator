const express = require("express")

const app = express()
const usersController = require("./usersController")

app.get("/", (request, response) => {
    response.send("This is an app my dude")
})

app.use("/users", usersController)
module.exports = app;