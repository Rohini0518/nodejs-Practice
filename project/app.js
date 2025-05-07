const express=require('express');
const joi=require("joi");
const mongoose=require("mongoose");
const app=express()
mongoose.connect("mongodb://127.0.0.1/coursePlatform")
.then(()=>console.log(" Mongodb connection is successfull"))
.catch((err)=>console.log("couldn't connect to mongoose",err))


const port=process.env.PORT||4044
app.use(express.json())
app.listen(port,()=>{console.log(`server is running in ${port}`);
})
console.log(port);

let categories=[{id:1,category:"frontend"},{id:2,category:"database"},{id:3,category:"backend"}]
app.get("",(req,res)=>{
    res.send("welcome to My Project")
    console.log("get home server started ");
})

app.get("/cats",(req,res)=>{
    res.send(categories)
})

app.post("/createCategory",(req,res)=>{
    const {error}=joiValidator(req.body)
    if(error) res.status(400).send({message:"error in joi valdator",details:error.details[0]})
    const newCategory={
        id:categories.length+1,
        category:req.body.category
    }
    categories.push(newCategory)
    console.log(categories);
    res.status(200).send("category added",newCategory)
})
 
app.put("/cats/:id",(req,res)=>{
   const catExist= categories.findIndex((cate)=>cate.id!==parseInt(req.params.id))
   console.log(catExist);
   if (catExist === -1) return res.status(404).send("Category not found");
   categories[catExist].category=req.body.category
res.send("updated categories data")
})

app.delete("/cats/:id",(req,res)=>{
    const catExist= categories.find((cate)=>cate.id===parseInt(req.params.id))
    if(!catExist) return null
    categories.splice(catExist,1)
    res.send("category delted")

})

function joiValidator(category){
    const schema=joi.object({
        category:joi.string().min(3).required()
    })
    return schema.validate(category)
}