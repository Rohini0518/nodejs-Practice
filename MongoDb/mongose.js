const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/testDatabase")
  .then(() => console.log("connection is suuscessfull"))
  .catch((err) => console.log("couldnot connected to mongodb", err));

const courseSchema = mongoose.Schema({
  courseName: { type: String, required: true, unique: true },
  author: String,
  publishedDate: { type: Date, default: Date.now },
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    courseName: "Next JS",
    author: "Aditya pal",
    price: 5599,
  });

  const result = await course.save();
  console.log(result);
}
// createCourse()

async function getCourses() {
  const course = await Course.find({ author: { $eq: "rohini" } }).select({
    courseName: 1,
  });
  console.log("getcourse:::", course);
}

// getCourses()

async function updateCourse(id) {
  let course = await Course.findById(id);
  try {
    if (!course) return;
    (course.courseName = "RUBY"), (course.author = "shyam");
    const updateCourse = await course.save();
  } catch (err) {
    console.log(err);
  }
}

updateCourse("680829cbf41f7d2543b95b11")