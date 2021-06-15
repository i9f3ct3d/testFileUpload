const express =require("express");
const app=express();
const mongoose=require("mongoose");
const CORS = require('cors');
const path = require ('path');

mongoose.connect('mongodb+srv://admin-sushanta:Password8172070757@cluster0.jyi3v.mongodb.net/testFileUpload', {useNewUrlParser: true, useUnifiedTopology: true});

const Upload=require("./routes/uploadFilePage");
const View=require("./routes/viewFilePage");

app.use(express.json());
app.use(CORS());

app.use("/uploads/images" , express.static(path.join('uploads' , 'images')));

app.use("/uploadFile",Upload);
app.use("/viewFile",View);

app.listen(5000,()=>{
    console.log("Server Started");
})