const express = require('express');
const connect = require('./config/database.js');
const app = express();

const { HashtagRepository } = require('./repository/index.js');
const TweetService = require('./services/tweet-service.js')

app.listen(3000, async () => {
    console.log('App is listening on port 3000');
    await connect();
    console.log('Mongo DB connected');

    let service  = new TweetService();
    const tweet = await service.create({content : 'This is after #processing really #excited #Trend #IPL #Cricket'});
    console.log(tweet);
});
