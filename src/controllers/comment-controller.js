import {CommentService} from '../services/index.js'

const commentService = new CommentService();
export const create = async(req,res)=>{
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType,req.user.id,req.body.content);
        return res.status(201).json({
            data:response ,
            message : 'Successfully created a comment',
            success : true,
            err : {}

        })
       } catch (error) {
        return res.status(500).json({
            data:{} ,
            message : 'failed to create a comment',
            success : false,
            err :error
        })
    }
}