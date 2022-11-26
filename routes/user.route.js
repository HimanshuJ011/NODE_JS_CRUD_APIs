const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller') //Getting Model from DB

//Api for  get,post,put.....

router.get('/show',userController.getUserDetails);
//--------------------Post -------------------------
//router.post('/new',userController.createUser);
// -----------------FETCH DATA----------------
router.post("/signup",userController.signUp);
// router.get('/data',userController.fetch 
// //-----------------Delete Data ---------------------

// router.delete('/user/:id', userController.deleteUser);
// //------------------Update DATA------------------

// router.patch('/user/:id', userController.updateUser);

module.exports = router;