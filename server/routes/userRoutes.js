const express = require('express')
const router = express.Router();
const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authMiddleware = require('../middlewares/authMiddleware')
require('dotenv').config();


router.post('/register', async(req, res) => {

    try {
        const userExists = await User.findOne({ email : req.body.email });

    if(userExists) {
        res.send({
            success : false,
            message : "User Already Exists ✅"
        });
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const newUser = await User(req.body);
    await newUser.save();

    res.send({
        success : true,
        message : "User created successfully ✅"
    })
    
    } catch (error) {
        console.log("Error in userRoute post Register", error)

        res.send({
            success : false,
            message : error
        })
    }
    
})


router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ email : req.body.email });

        if(!user){
            res.send({
                success : false,
                message : "User does not Exist ❌"
            })
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword){
            res.send({
                success : false,
                message : "Invalid email or password ❌"
            })
            return;
        }

        const token = jwt.sign( {userId: user._id}, process.env.JWT_SECRET, {expiresIn : "7d"} );

        res.send({
            success : true,
            message : "Logged in successfully ✅",
            token : token
        })

    } catch (error) {
        console.log(error);
    }
})

router.get('/get-current-user', authMiddleware, async (req, res) => {
    // inform server if the token is valid or not
    const user = await User.findById(req.body.userId).select("-password");
    res.send({
        success : true,
        message : "You are Authorized",
        data : user
    })
})

module.exports = router;


// Bearer token - you can send a JWT token from client to server using Bearer token [inside headers - Authorization]