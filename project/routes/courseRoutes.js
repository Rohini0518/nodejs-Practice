const courseController=require("../controllers/courseController")
const express=require("express")
const router=express.Router()

router.get("/getAllCourses",courseController.getAllCourses);
router.post("/createCourse",courseController.createCourse);

module.exports=router

