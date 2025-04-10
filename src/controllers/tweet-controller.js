import {TweetService} from '../services/index.js'

const tweetService = new TweetService();
export const createTweet = async(req,res)=>{
    try {
        const response = await tweetService.create(req.body);
     
        return res.status(201).json({
            data:response ,
            message : 'Successfully created a tweet',
            success : true,
            err : {}

        })
       } catch (error) {
        return res.status(500).json({
            data:{} ,
            message : 'failed to create a tweet',
            success : false,
            err :error

        })
    }
}

export const getTweet = async(req,res)=>{
    try {
        const response = await tweetService.get(req.params.id);
     
        return res.status(201).json({
            data:response ,
            message : 'Successfully fetched a tweet',
            success : true,
            err : {}

        })
       } catch (error) {
        return res.status(500).json({
            data:{} ,
            message : 'failed to fetch  a tweet',
            success : false,
            err :error

        })
    }
}