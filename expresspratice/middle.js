function middleTest(req,res,next){
    console.log("first custom middleware") ;
    
    next()
}

module.exports=middleTest