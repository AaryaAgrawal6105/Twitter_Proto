import {LikeService} from '../services/index.js'

const  likeService = new LikeService();

export const toggleLike = async(req,res)=>{
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType,req.body.userId);
        return res.status(201).json({
            data : response,
            err :{},
            success : true,
            message :'successfully toggled like'
        })

    } catch (error) {
        return res.status(500).json({

            data:{},
            success :false,
            message :'failed to toggle like',
            err : error

        })
    }
}
