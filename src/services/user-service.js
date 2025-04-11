import {UserRepository} from '../repository/index.js'


class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
        return user;
        } catch (error) {
            console.log('error in user-service');
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findByEmail({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        const user = await this.getUserByEmail(data.email);
        if(!user){
            throw ({
                message:'no user found'
            })
        }
        if(!user.comparePassword(data.password)){
            throw ({
                message:'incorrect password'
                
            })
        }
        const token = user.generateJWT();
        return token;
    }
}

export default UserService;