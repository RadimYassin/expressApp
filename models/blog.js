const mongoose =require('mongoose');
const Schema =mongoose.Schema;
// create schema for structure
const blogSchema =new Schema({
    title :{
        type:String,
        required:true
    }
    ,
    snippet:{
        type:String,
        required:true
    }
    ,
    body:{
        type:String,
        required:true
    }

} ,{timestamps:true})


// craete models


const Blog = mongoose.model('blog',blogSchema);
module.exports=Blog;