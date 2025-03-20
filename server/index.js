require('dotenv').config();

const express = require('express')
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes")

const dburl = process.env.MONGO_URI;

app.use(express.json());

mongoose.connect(dburl)
.then(() => {
    console.log("Monog DB Connected .. ✅")
})
.catch((err) => {
    console.log("Error Connecting MongoDB .. ❌", err);
})

app.use('/api/users', userRoutes);

app.listen(8000, () => {
    console.log("Server Started .. ✅")
})
