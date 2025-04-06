const {TweetRepository , HashtagRepository} = require('../repository/index');

class TweetService{
    constructor(){
        this.TweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((hashtag)=>hashtag.substring(1)).map(tag=>tag.toLowerCase());
        const tweet = await this.TweetRepository.create(data);
        
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        let titleOfAlreadyPresentTags = alreadyPresentTags.map(tag=>tag.title);
        let newTags = tags.filter((tag=> !titleOfAlreadyPresentTags.includes(tag)));
        newTags = newTags.map(tag => {
            return {title : tag , tweets :[tweet.id] };
        })
        const response = await this.HashtagRepository.bulkCreate(newTags);
       alreadyPresentTags.forEach((tag)=>{
        tag.tweets.push(tweet.id);
        tag.save();
       });

        return tweet;

    }
}


module.exports = TweetService