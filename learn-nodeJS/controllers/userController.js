// const fs = require("fs");

const data = {
  users: require("../model/users"),

  setUser: (data) => {
    this.users = data;
  },
};

const createUser = (req, res) => {
  const newUser = {
    id: data.users[data.users.length - 1].id + 1 || 1,
    name: req.body.name,
    age: req.body.age,
  };

  //   console.log(newUser);
  data.setUser([...data.users, newUser]);
  res.status(201).json(data.users);
};

module.exports = { createUser };
