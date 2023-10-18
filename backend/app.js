const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Server
app.listen(3001, () => {
    console.log("Server is up and running...");
});

/* MongoDB Connection */
/* mongoose.set("strictQuery", false);
console.log("Server is starting... Connecting to MongoDB...");
mongoose.connect("mongodb://user:password@localhost:27017/dbname")
    .then(() => {
        console.log("MongoDB connected...")
        app.listen(3000, () => {
            console.log("Server is up and running...")
        });
    })
    .catch((error) => {
        console.log("An error occurred trying to run the app...\n" + error);
    }); */