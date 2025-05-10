const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    studentName:{type:String,required:true,minlenght:3},
    enrolled:{type:Boolean,default:false}
})

const Student=mongoose.model("Student",studentSchema)

module.exports=Student









