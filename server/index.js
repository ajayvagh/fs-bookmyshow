require('dotenv').config();

const express = require('express')
const app = express();
const mongoose = require('mongoose');

const dburl = process.env.MONGO_URI;


mongoose.connect(dburl)
.then(() => {
    console.log("Monog DB Connected .. ✅")
})
.catch((err) => {
    console.log("Error Connecting MongoDB .. ❌", err.message)
})




app.listen(8000, () => {
    console.log("Server Started .. ✅")
})
