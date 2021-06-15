const mongoose = require('mongoose')

const { Schema } = mongoose;

 const imgSchema = new Schema({
        name  :String,
        imgName : String
    });

module.exports=imgSchema;