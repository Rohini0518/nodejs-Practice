const express=require("express")
const router=express.Router()
const studentController=require("../controllers/studentControllers")


router.get("/",studentController.getAllStudents);
router.post("/",studentController.createStudent);
router.put("/",studentController.updateStudent);
router.delete("/",studentController.deleteStudent);

module.exports=router