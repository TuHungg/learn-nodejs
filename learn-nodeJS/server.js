const express = require("express");
const app = express();
const path = require("path");
const datetimenow = new Date().toLocaleString();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("HOME");
});

// router
// app.use("/user", require("./routes/user"));

app.all("*", (req, res) => {
  res.status(404).type("txt").send("404 NOT FOUND 😵‍💫");
});

const fs = require("fs");

const dbTest = require("./model/testdb.json");

const data = { name: "hung", city: "HCM" };
// console.log(dbTest);

const newData = [...dbTest, data];

// console.log(newData);

// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj);

// // stringify JSON Object
var jsonContent = JSON.stringify(newData);
console.log(jsonContent);

const writeFileJson = (data) => {
  try {
    fs.writeFile("/model/testdb.json", data, "utf8", function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
      return;
    });
  } catch (error) {
    console.log(error);
  }
};

writeFileJson(jsonContent);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ------> ${datetimenow}`);
});
