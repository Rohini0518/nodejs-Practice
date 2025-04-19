const express=require("express");
const middleTest = require("./middle");
const app=express()
const port=process.env.PORT|| 4080
let courses = [
    { id: 1, courseName: "Javascript" },
    { id: 2, courseName: "Python" },
    { id: 3, courseName: "React" },
    { id: 4, courseName: "Nodejs" },
  ];
app.listen(port)

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to HOME Page")
})

app.use(middleTest)
app.get("/courses",(req,res)=>{
    res.send(courses)
})

// CRUD OPERATIONS

app.get("/courses/:id",(req,res)=>{
    const course=courses.find((course)=>course.id===parseInt(req.params.id));
    if(!course) res.send("Course is not found")
    res.send(course)
})

// create method i.e POST
app.post("/courses",(req,res)=>{
    const course={
        id:courses.length+1,
        courseName:req.body.courseName
    }
    courses.push(course)
 res.send(courses)
})

// Update method PUT

app.put("/courses/:id",(req,res)=>{
    const existed=courses.find((course)=>course.id===parseInt(req.params.id))
    if(!existed) res.send("course id not available")
    const index=courses.indexOf(existed)    
    courses[index].courseName=req.body.courseName
    res.send(courses)

})
// delete method

app.delete("/courses/:id",(req,res)=>{
    const existed=courses.find((course)=>course.id===parseInt(req.params.id))
    if(!existed) res.send("course id not available")
    const updatedCourses=courses.filter((course)=>course.id!==parseInt(req.params.id))  
courses=updatedCourses  
res.send(courses)
})
