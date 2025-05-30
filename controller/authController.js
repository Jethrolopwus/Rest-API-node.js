const user = require("../db/models/user");

const signup = (req, res) => {
   const body = req.body;
   if(!['1', '2'].includes(body.userType)){
    return res.status(400).json({
        status: "fail",
        message: "Invalid user type",
    });
   }
   const newUser = user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,

   });
   if(!newUser){
    return res.status(400).json({
        status: "fail",
        message: "Failed to create the  user",
    });
   }
   return res.status(201).json({
    status: "success",
    data: newUser,
   })
};

module.exports = { signup };