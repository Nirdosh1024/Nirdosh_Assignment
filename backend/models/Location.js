// models/User.js
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");


const Location = sequelize.define(
    "Location",
    {
        name: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.STRING, allowNull: false },
        latitude: { type: Sequelize.STRING, allowNull: false },
        longitude: { type: Sequelize.STRING, allowNull: false },
    },
    {}
);

module.exports = Location;