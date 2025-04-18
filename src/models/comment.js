import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    onModel : {
        type : String,
        required : true ,
        enum : ['Tweet' , 'Comment']
    },
    
        commentable : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            refPath : 'onModel'
        },
     user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        comments:[
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref :'Comment'
                }
            ],
    

});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
