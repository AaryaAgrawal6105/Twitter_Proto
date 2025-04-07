import hashtags from '../models/hashtags.js';

class HashtagRepository {
    async create(data) {
        try {
            const hashtag = await hashtags.create(data);
            return hashtag;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const hashtag = await hashtags.insertMany(data);
            return hashtag;
        } catch (error) {
            console.log('Error in bulkCreate');
            throw error;
        }
    }

    async get(id) {
        try {
            const hashtag = await hashtags.findById(id);
            return hashtag;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async destroy(id) {
        try {
            await hashtags.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log('Error in repository layer');
            throw error;
        }
    }

    async findByName(titleList) {
        try {
            const tags = await hashtags.find({
                title: { $in: titleList },
            });
            return tags;
        } catch (error) {
            console.log('Error in hashtag-repo');
            throw error;
        }
    }
}

export default HashtagRepository;
