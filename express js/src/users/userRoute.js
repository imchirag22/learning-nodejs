import express from 'express'
import { User } from './userModel.js' 
const userRouter = express.Router()
userRouter.post('/', async (req,res) => {
    const {name, email, password} = req.body;
    
    const result = await User.create({
         name,
         email,
         password
    });
    console.log(result)
        
    res.status(201).json({ 
        id: result._id
    });
})
export default userRouter