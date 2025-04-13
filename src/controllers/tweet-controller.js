import {TweetService} from '../services/index.js'
import upload from '../config/file-upload-s3-config.js'

const singleUploader = upload.single('image');  
const tweetService = new TweetService();
export const createTweet = async(req,res)=>{
    try {

        singleUploader(req,res,async function(err,data){
            if(err){
                return res.status(500).json({
                    message : 'error',
                    error : err
                })
            }
            console.log('image url is ',req.file);
            const payload = req.body;
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
     
        return res.status(201).json({
            data:response ,
            message : 'Successfully created a tweet',
            success : true,
            err : {}

        })
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