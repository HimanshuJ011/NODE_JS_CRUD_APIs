const userModel = require('../database/models/User');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const salt = "SALT"
//----------Home page---------
exports.getUserDetails = async (req,res) =>{
    
    try {
        const userData = await userModel.find();
        res.send({
          statusCode: 200,
          message: "List of all users",
          error: false,
          data: userData,
        });
      } catch (error) {
        res.send({
          statusCode: 400,
          message: error.message,
          error: true,
          data: null,
        });
      }
    };


//-------------------Create user--------------
exports.createUser = async (req, res , next) =>{
   
       try { 
        const user = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        const new_save = await user.save();
        

        console.log("hola buddy");
        console.log("req data = \n",req.body);
        res.send(new_save);
        next();
       } catch (error) {
        res.send(error.message)
       }
}
exports.signUp = async (req,res) =>{

 try {
  const userData = req.body

  const ExistUser = await userModel.findOne({email : userData.email});

  if (ExistUser) {
    res.send({
      statusCode:200,
      message:"User already Exist",
      error:false,
      data:ExistUser,
    });

  }else{
    const hash = crypto.createHash("sha1");
    hash.update(userData.password + salt)
    const hashPassword = hash.digest("hex");

    const newUser = new userModel ({
      name: userData.name,
      email:userData.email,
      password:hashPassword,
  
    });
    await newUser.save();
    const secretkey = "HERO";
    const token  = jwt.sign({userid: newUser._id}, secretkey);
    res.send({
      statusCode:200,
      message:"User created Successfully!!",
      error:false,
      data:newUser,
      token:token,
    });
  }

 } catch (error) {
  res.send({
    statusCode:400,
    message:error.message,
  });
 }

};

//--------------Fetching DATA From DATABASE------------

// exports.fetchData = async (req,res)=>{
//     const userData = await userModel.find();

//     try {
//         console.log("User DATA is here\n");
//         res.send(userData)
//     } catch (err) {
//         console.log("Error is there");
//         res.send(err)
//     }
// }
// //------------------DELETE_USER_from DB BY using  'Object Ids' 
// exports.deleteUser =  async(req, res) =>{
//     const id = req.params.id;

//     const deleteUser = await userModel.remove({
//         _id:id
//     })

//     try {
//         console.log("user is deleted");
//         res.send(deleteUser)
//     } catch (err) { 
//         console.log("Error Unable to Delete");
//         res.send(err)
//     }
// }
// //-----------------Update users------

// exports.updateUser = async (req, res) =>{
//     const id = req.params.id;

//     const updateUser = await userModel.update(
//         {_id:id},
//         {
//             $set:req.body
//         }
//     )

//     try {
//         console.log("Updated User");
//         res.send(updateUser)
//     } catch (err) { 
//         console.log("Error in Update");
//         res.send(err)
//     }
// }
