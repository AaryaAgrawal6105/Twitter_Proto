import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js'
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    
    // async create(data) {
    //     try {
    //         const tweet = await Tweet.create(data);
    //         return tweet;
    //     } catch (error) {
    //         console.log('Error in repository layer');
    //         throw error;
    //     }
    // }

    async getwithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' });
            return tweet;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }   

    // async update(tweetId, data) {
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
    //         return tweet;
    //     } catch (error) {
    //         console.log('Error in repository layer');
    //         throw error;
    //     }
    // }
}

export default TweetRepository;
