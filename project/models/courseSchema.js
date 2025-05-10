const mongoose = require("mongoose");
const { categorySchema } = require("../models/categorySchema");

const courseSchema = new mongoose.Schema({
  course: { type: String, required: true },
  instructor: { type: String, required: true },
  category: { type: categorySchema, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
 
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
