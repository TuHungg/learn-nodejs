const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const nodemailer = require("nodemailer");
const datetimenow = new Date().toLocaleString();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hongocthuykieu@gmail.com",
    pass: "Tuhung@123",
  },
});

var mailOptions = {
  from: "hongocthuykieu@gmail.com",
  to: "peteranh99@gmail.com",
  subject: "Sending Email using Node.js",
  text: "peter ngu",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("sended at: ", datetimenow);
    console.log("Email sent: " + info.response);
  }
});

const port = 3000;

// const datetimenow = new Date().toLocaleString();

const server = http.createServer((req, res) => {
  res.sendDate("Success");
});

// const server = http.createServer(async (req, res) => {
//   res.statusCode = 200;

//   console.log(path.basename("User/data.txt"));

// write file
// const data = [];
// req.on("data", (chunk) => {
//   console.log("data: ", String(chunk));
//   data.push(String(chunk));
// });
// req.on("end", () => {
//   console.log("result", data.toString());

//   fs.appendFile("data.txt", data.toString(), function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });
//   res.end();
// });

//   res.end();
// });

server.listen(port, () => {
  console.log(`Server running at the port ${port} ---> at: ${new Date().toLocaleString()}`);
});
