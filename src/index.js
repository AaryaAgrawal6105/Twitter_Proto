const express = require('express');
const connect =require('./config/database.js')
const app = express();
const TweetRepository = require('./repository/tweet-repository.js')

app.listen(3000 ,async ()=>{
    console.log('App is listening on port 3000');
    await connect();
    console.log('Mongo Db connected');
    const tweetRepo = new TweetRepository();
    await tweetRepo.create({content : "this is the tweet with a hook"}) 
    // console.log(t);
})