const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob: { type: Date },
    password:{
        type:String,
        required:true
    },
    address: {
        street: { type: String },
        city: { type: String },
        pincode: { type: Number },
      },
    date:{
        type:Date,
        default:Date.now
    }
})

const userModel = new model("User",UserSchema);

module.exports = userModel;