import express from 'express';
import connect from './config/database.js';
import { HashtagRepository } from './repository/index.js';
import TweetService from './services/tweet-service.js';
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api' , apiRoutes);
app.listen(3000, async () => {
    console.log('App is listening on port 3000');
    await connect();
    console.log('Mongo DB connected');
    
});
