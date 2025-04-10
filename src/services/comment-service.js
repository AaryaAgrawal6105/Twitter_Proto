import {CommentRepository,TweetRepository }from '../repository/index.js'


class CommentService{

    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }


    async createComment(modelId, modelType , userId,content){
       
        if(modelType == 'Tweet'){
            var commentTable = await this.tweetRepository.get(modelId);
        }
        else if(modelType == 'Comment'){
            var commentTable = await this.commentRepository.get(modelId)
        }
        const comment = await this.commentRepository.create({
            commentable:modelId,
            onModel:modelType,
            user:userId,
            content : content,
            comments:[]
            
        });
       
        commentTable.comments.push(comment);
        await commentTable.save();
        return comment;
    }
}

export default CommentService;