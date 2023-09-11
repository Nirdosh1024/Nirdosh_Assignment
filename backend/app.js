const express = require("express");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");

// Model
const Location = require("./models/Location");

const app = express();

// middleware
app.use(logger("dev"));

require("dotenv").config();
require("./config/connectDB");

app.use(cors()); // Enable Cors

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/get-address", async (req, res) => {
    try {
        const locations = await Location.findAll();
        const locationData = locations.map(location => location.get());
        res.json(locationData[0]);
    } catch(err) {
        console.log(err);
        res.json({ "error": err });
    }
});

module.exports = app;