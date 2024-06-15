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
    media: {
        type:Object,
        required: true
    },
    location: {
        type :String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('contents',ContentSchema)