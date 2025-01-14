const mongoose=require('mongoose');

const Database=async (req,res) => {
  try {
    await mongoose.connect("mongodb+srv://todo:todo@cluster0.bxfxd.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true, }
    ).then(()=>{
      console.log("Connected")
    })

     
   } catch (error) {
     res.status(400).json({message: "Not Connected!"});
     console.log("Not connected",error)
   }
}
Database();
