const express = require('express');
const connect =require('./config/database.js')
const app = express();
const Comment = require('./models/comment.js')
const TweetRepository = require('./repository/tweet-repository.js')

app.listen(3000 ,async ()=>{
    console.log('App is listening on port 3000');
    await connect();
    console.log('Mongo Db connected');
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getwithComments('67ee149244d25c3ce1135e6b');  
    console.log(tweet);


})