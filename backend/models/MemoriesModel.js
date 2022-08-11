const mongoose = require('mongoose');

const memoriesSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    place : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Memory", memoriesSchema);