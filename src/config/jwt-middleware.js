import JWT from 'passport-jwt'
import User from '../models/user.js'

const jwtStrategy = JWT.Strategy;

const extractJWT = JWT.ExtractJwt;

const opts= {
    jwtFromRequest : extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_secret'

}

export const passportAuth =(passport)=>{
    try {
        passport.use(new jwtStrategy(opts ,async (jwt_payload , done)=>{
            const user = await User.findById(jwt_payload.id);
            if(!user){
                done(null,false)
            }
            else{
                done(null,user)
            }
    
        }));
        
    } catch (error) {
        console.log('error in jwt-middleware');
        throw(error);    
    }
}