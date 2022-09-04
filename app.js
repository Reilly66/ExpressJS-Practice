const express = require('express');
const path = require("path");
const logger = require("./middleware/logger")
const members = require("./models/Members")

const app = express();



// initialise middleware
app.use(logger)

// get all members
app.get("/api/members", members.getMembers)

// get single members
app.get("/api/members/:id", members.getSingleMember)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port ${PORT}"));
