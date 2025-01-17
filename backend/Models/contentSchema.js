const mongoose  = require('mongoose')

const ContentSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true

    },
    content:{
        type: String,
        required :true
    },
   
    url: {
        type: String,
        required: true
    },
    location: {
        type :String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('contentsamples',ContentSchema)