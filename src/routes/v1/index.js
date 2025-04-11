import express from 'express';
import {createTweet,getTweet} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js'
import {create} from '../../controllers/comment-controller.js'
import {signup,login} from '../../controllers/auth-controller.js'
import {authenticate} from '../../middleware/authenticate.js'

const router = express.Router();

router.post('/tweets' ,authenticate, createTweet);
router.post('/likes/toggle',toggleLike );
router.post('/comments',authenticate, create)
router.get('/tweets/:id' , getTweet);
router.post('/signup', signup)
router.post('/login',login)
export default router;