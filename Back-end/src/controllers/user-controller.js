import { registerUser } from "../services/user-service.js";    
import { loginUser } from "../services/user-service.js";

export const home = (req, res) => {
    res.send('URL SHORTNER');
}

export const login = async (req, res) => {
    const userInfo = req.body;
    try {
    const doc = await loginUser(userInfo);
    if(doc && doc._id)
    {
      res.json({message: 'Login successfully', id:doc._id , email:doc.email});
    }
    else{
      res.json({message:'Invalid Email or Password'});
    }
    
    } catch (err) {
      res.json({error:'something went wrong during login',err:err.message});
        console.log('Error during login ', err);
    } 
}

export const register = async (req, res) => {
    const userInfo = req.body;
    try {
    const doc = await registerUser(userInfo);
    res.json({message: 'User registered successfully', id:doc._id});
    } catch (err) {
      res.json({error:'something went wrong during register',err:err.message});
        console.log('Error during register ', err);
    }
}