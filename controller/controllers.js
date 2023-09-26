const User = require("../models/courses");
const { validationResult } = require('express-validator');
const getAllUsers = async(req, res) => {
  let users = await User.find()
 res.json({status:"success",data:{users:users}})
}
const addUser = async(req, res) => {
  
const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newUser = new User(req.body)
    await newUser.save();
    return res.json(newUser);
 }
res.send(errors.array())
}
module.exports = {
  getAllUsers,
  addUser
}