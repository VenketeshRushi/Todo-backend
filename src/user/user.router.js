const express = require("express");
const User = require("./user.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.send("These are the users");
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  try {
    let user = await User.findOne({ email, password });
    console.log(user);
    if (!user) {
      return res.status(401).send("Invalid Credintial");
    }
    res.send({
      token: `${user.id}:${user.name}:${user.email}:${user.password}`,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/signup", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create user with existing email address, try logging in with using email address"
        );
    }
    let newUser = await User.create(req.body);
    res.send({
      token: `${newUser.id}:${newUser.name}:${newUser.email}:${newUser.password}`,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
