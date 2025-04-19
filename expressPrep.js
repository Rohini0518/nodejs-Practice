const express = require("express");
const port = process.env.PORT || 4050;
const app = express();
const courses = [
  { id: 1, courseName: "Javascript" },
  { id: 2, courseName: "Python" },
  { id: 3, courseName: "React" },
  { id: 4, courseName: "Nodejs" },
];
app.listen(port, "localhost", () => {
  console.log(`running in ${port} port`);
});
app.get("/", (req, res) => {
  res.send("HEllo sending from res,get");
});

app.get("/about", (req, res) => {
  res.send("We Are RockStars");
});

app.get("/contact", (req, res) => {
  res.send("We Create Impact , Connect With Us in LinkedIn");
});

app.get("/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id));
  console.log("course", course);
  if(!course) res.status(404).send("cant find course");
  res.send(course.courseName)
});
