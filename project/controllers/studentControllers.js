const Student=require("../models/students")

const createStudent=async (req,res)=>{
const student=new Student({
    studentName:req.body.studentName,
    enrolled:req.body.enrolled
})
res.status(404).send({message:"student created",data:student})
await student.save()
}

const getAllStudents=async (req,res)=>{
    const student= await Student.find()
    res.status(404).send(student)
}

const updateStudent=async (req,res)=>{
    const student=Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
}

const deleteStudent=async (req,res)=>{
    const student=Student.findByIdAndRemove(req.params.id)
}



module.exports={createStudent,getAllStudents,updateStudent,deleteStudent}