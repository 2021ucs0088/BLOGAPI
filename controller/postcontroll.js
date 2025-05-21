const express=require('express');
const postmodel=require('../model/postmodel');
// create post
// delete post
// update post
// get all post
// get post by id
const createpost=async(req,res)=>{
    try{
        const {title,body,author}=req.body;
        const post=new postmodel({title,body,author});
        const savedpost=await post.save();
        res.status(200).json(savedpost);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
const deletepost=async(req,res)=>{
    try{
        const post=await postmodel.findByIdAndDelete(req.params.id);
        res.json({message:"post deleted"});
    }
    catch(err){
        res.json({message:"not able to delete post"});
    }

}
const updatepost=async(req,res)=>{
    const post=await postmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({message:"post updated"});

}
const getallpost=async(req,res)=>{
    const posts=await postmodel.find();
    res.json(posts);


}
const getpostbyid=async(req,res)=>{
    const post=await postmodel.findById(req.params.id);
    if(!post){
        return res.status(404).json({message:"post not found"})

    }
    res.json(post);

}
module.exports={createpost,deletepost,updatepost,getpostbyid,getallpost};

