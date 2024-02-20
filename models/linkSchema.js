const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    url: {type: String, required:true},
    newURL: {type:String, default: ""},
    ID: {type: String, required:true},
    used: {type: Boolean, default: false}
})

module.exports = mongoose.model("Link", linkSchema)
