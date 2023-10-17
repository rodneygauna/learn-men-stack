const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
