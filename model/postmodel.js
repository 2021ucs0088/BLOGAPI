const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports =mongoose.model('postmodel',postschema);

