const express=require('express');
const router=express.Router();
const {createpost,deletepost,updatepost,getpostbyid,getallpost}=require('../controller/postcontroll');
// update post
router.post('/createpost',createpost);
router.get('/getallpost',getallpost);
router.get('/getpostbyid/:id',getpostbyid);
router.put('/updatepost/:id',updatepost);
router.delete('/deletepost/:id',deletepost);
module.exports=router;