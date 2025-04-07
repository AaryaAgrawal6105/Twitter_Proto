import Tweet from '../models/tweet.js';

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async destroy(id) {
        try {
            await Tweet.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async getwithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' });
            return tweet;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async update(tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
            return tweet;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }
}

export default TweetRepository;
