const Router=require('express').Router();
const User=require('../Models/user');
const bcrpyt=require('bcryptjs')
// sign up
Router.post('/register', async(req,res)=>{
  try {
    console.log(req.body)
    const{email,username,password}=req.body;
    const hashpassword=bcrpyt.hashSync(password)
const user=new User({email,username,password:hashpassword});

await user.save().then(()=> res.status(200).json({message:"Sign Up Successfully"}))
  }
   catch (error) {
    console.log(error)
    res.status(200).json({message:"user already exists"})
  }

})

// sign in



Router.post('/signin', async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    // Verify password
    const isPasswordCorrect = bcrpyt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Exclude password from the response and include the user ID
    const { password, ...others } = user._doc;
    return res.status(200).json({ userId: user._id, ...others, message: "Sign in successful!" });

  } catch (error) {
    console.error("Sign in error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});



module.exports=Router;