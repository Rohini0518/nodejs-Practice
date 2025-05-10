const express = require("express");
const router = express.Router();
const joi = require("joi");
const Category=require("../models/Category")

router.get("/cats", async (req, res) => {
    const category=await Category.find()
    if(!category) return res.status(404).send({message:"no categories",data:category})
  res.send({message:"All categories",data:category})
});

router.get("/cats/:id", async (req, res) => {
    const category=await Category.findById(req.params.id)
    if(!category) return res.status(404).send({message:"category deleted",data:category})
    });

router.post("/createCategory", async (req, res) => {
  const { error } = joiValidator(req.body);
  if (error)
    res
      .status(400)
      .send({ message: "error in joi valdator", details: error.details[0] });
  const newCategory = new Category({
    category: req.body.category,
  })
  await newCategory.save();
  res.status(200).send({message:"category added",data: newCategory});
});

router.put("/cats/:id", async (req, res) => {
  const {error}=joiValidator(req.body)
  if (error) return res.status(404).send(error.details[0].message);
  const catExist= await Category.findByIdAndUpdate(req.params.id,{name:req.body.category},{new:true})
  res.send({message:"updated categories data",data:catExist});
});

router.delete("/cats/:id", async (req, res) => {
 const category=Category.findByIdAndRemove(req.params.id)
 if(!category) return res.status(404).send({message:"category deleted",data:category})
});

function joiValidator(category) {
  const schema = joi.object({
    category: joi.string().min(3).required(),
  });
  return schema.validate(category);
}
module.exports = router;
