const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    menu: String,
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);