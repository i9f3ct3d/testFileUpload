const mongoose = require('mongoose')
const imgSchema=require('./imgSchema')

const imgModel = mongoose.model('images' , imgSchema);

module.exports = imgModel;