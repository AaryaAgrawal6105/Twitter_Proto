const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    
    content : {
        type : String,
        required : true
    } , 
    userEmail :{
        type: String
    },
    
})

const Comment = mongoose.model('Comment' , commentSchema);

module.exports = Comment;