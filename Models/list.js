const mongoose=require('mongoose');
const Lists=mongoose.Schema({
title:{
  type:String,
  required:true
},
body:{
  type:String,
  required:true
},
user:[
  {
    type:mongoose.Types.ObjectId,
    ref:"user"
  },
],
});

module.exports=mongoose.model("List",Lists);