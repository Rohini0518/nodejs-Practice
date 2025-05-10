const Course=require("../models/courseSchema")


const createCourse=async (req,res)=>{
const course= new Course({course:req.body.course,instructor:req.body.instructor})
res.status(400).send(course)
await course.save()
}

const getAllCourses=async (req,res)=>{
const course= await Course.find()
res.send(course)
}


module.exports={createCourse,getAllCourses}
