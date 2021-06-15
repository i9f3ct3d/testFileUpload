const express = require("express");
const multer = require("multer");
const Router=express.Router();
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const imgModel = require('./imgModel')


const MIME_TYPE={
    'image/png'  : 'png' , 
    'image/jpeg' : 'jpeg' ,
    'image/jpg'  : 'jpg' ,
}


Router.get("/" , async(req , res)=>{
    return res.sendStatus(200);
});

var imgName="";

const upload = multer({
    storage : multer.diskStorage({
        destination : (req , file , cb)=>{ 
            cb(null , "uploads/images");
        },
        filename : (req , file , cb)=>{
            imgName=uuidv4() +"."+ MIME_TYPE[file.mimetype]
            cb(null, imgName);
        }
    }),
    fileFilter: (req , file , cb )=>{
        
        var isValid = !! MIME_TYPE[file.mimetype];

        const error = isValid ? null : new Error("Invalid mimetype !! ");

        cb(error , isValid);

    },

});





Router.post("/" , upload.single('image') ,(req , res)=>{
    

    console.log(req.body.name);

    const newImgModel = new imgModel({
        name : req.body.name , 
        imgName : imgName,
    });

    newImgModel.save();

    return res.sendStatus(200);
});

module.exports=Router;