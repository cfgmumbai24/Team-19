const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url:{
        type: String,
       
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("categories", categorySchema);