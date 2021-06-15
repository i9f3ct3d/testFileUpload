const Router=require("express").Router();
const imgModel=require('./imgModel');

Router.post("/" , async(req , res)=>{

    if(req.body.name)
    {
        
        var foundImgdb=await imgModel.findOne({name : req.body.name});
        if(foundImgdb)
        {
            console.log(foundImgdb);
            return res.status(200).json(foundImgdb);
        }
        
    }
    return res.sendStatus(400);
})

module.exports=Router;