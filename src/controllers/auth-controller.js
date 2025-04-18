import UserService from '../services/user-service.js';

const userService = new UserService();

export const signup = async(req, res)=>{
try {
    const response = await userService.signup({
        email : req.body.email,
        password : req.body.password,
        username: req.body.username
    })
    return res.status(201).json({
        data:response,
        err:{},
        success:true,
        message:'successfully created a user'
    })
    
} catch (error) {
    return res.status(500).json({
        data:{},
        err:error,
        success:false,
        message:'failed created a user'
    })
}

}

export const login = async(req,res)=>{
    try {
        const token = await userService.signin(req.body);
        
       
       
        return res.status(200).json({
            message:'user is logged in successfully',
                success :true,
                data:token,
                err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            err:error,
            success:false,
            message:'failed to log in a user'
        })
    }
}