import express from 'express';
import connect from './config/database.js';
import { HashtagRepository,UserRepository  } from './repository/index.js';
import LikeService from './services/like-service.js';
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(passport.initialize());
passportAuth(passport);
app.use('/api' , apiRoutes);
app.listen(3000, async () => {
    console.log('App is listening on port 3000');
    await connect();
    console.log('Mongo DB connected');

    const userRepository = new UserRepository();

    // const user = await userRepository.create({
    //     email : 'abc@gmail.com',
    //     password : '1234',
    //     username : 'hucaimth'
    // })
    const likeService = new LikeService();
    await likeService.toggleLike(
        '67f2819adf6c096c7e45089c','Tweet','67f6819a8f9f46e3748f7782'
    )
    
});
