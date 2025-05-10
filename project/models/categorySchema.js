const mongoose=require("mongoose")

const categoriesSchema=new mongoose.Schema({
    category:{type:String,required:true,minlength:3}
})

const Category=mongoose.model("category",categoriesSchema)

module.exports={Category,categoriesSchema}
