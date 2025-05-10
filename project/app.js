const express=require('express');
const mongoose=require("mongoose");
const app=express()
const categoriesRoutes=require("./routes/categories")
const studentRouters=require("./routes/studentRouter")
const courseRouter=require("./routes/courseRoutes")
app.use(express.json())
app.use("/categories",categoriesRoutes)
app.use("/students",studentRouters)
const port=process.env.PORT||4044
app.listen(port,()=>{console.log(`server is running in ${port}`);
})
console.log(port);
app.use("/courses",courseRouter)

mongoose.connect("mongodb://127.0.0.1/coursePlatform")
.then(()=>console.log(" Mongodb connection is successfull"))
.catch((err)=>console.log("couldn't connect to mongoose",err))




