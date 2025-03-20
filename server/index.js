require('dotenv').config();

const express = require('express')
const app = express();
const cors = require('cors'); // ✅ Import cors
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes")

const dburl = process.env.MONGO_URI;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',  // Allow frontend origin
    credentials: true                 // Allow cookies (if needed)
}));

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
