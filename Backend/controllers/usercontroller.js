import { User } from "../models/Userschema.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const Register = async (req, res) => {
    try {
        const { username, name, email, password } = req.body
        // Basic validation
        if (!name || !username || !password || !email) {
            return res.status(401).json({
                message: 'All fields are required',
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: 'user already exist',
                success: false
            })
        }
        const hashedpassword = await bcryptjs.hash(password, 16)

        await User.create({
            name,
            username,
            email,
            password: hashedpassword
        })
        return res.status(201).json({
            message: 'Account created successfully',
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


// User Login

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                message: 'All fields are required',
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                message: 'Incorrect email or password',
                success: false
            })
        }
        const ismatch = await bcryptjs.compare(password, user.password)
        if (!ismatch) {
            return res.status(401).json({
                message: 'Incorrect email or password',
                success: false
            })
        }
        const tokendata = {
            userId: user._id
        }
        const token = await jwt.sign(tokendata, process.env.TOKEN_SECRET, { expiresIn: "1d" })
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: ` Welcome back ${user.name}`,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


export const logout = (req, res) => {
    try {
        return res.cookie("token", "", { expressIn: new Date(Date.now()) }).json({
            message: "user logout succesfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}




export const bookmark = async (req, res) => {
    try {
        const loggedinuserid = req.body.id
        const tweetid = req.params.id
        const user = await User.findById(loggedinuserid)
        if (user.bookmark.includes(tweetid)) {
            // Remove
            await User.findByIdAndUpdate(loggedinuserid, { $pull: { bookmark: tweetid } })
            return res.status(200).json({
                message: "removed from bookmark"
            })
        } else {
            // save
            await User.findByIdAndUpdate(loggedinuserid, { $push: { bookmark: tweetid } })
            return res.status(200).json({
                message: "saved to bookmark"
            })
        }
    } catch (error) {
        console.log(error);

    }
}

export const getmyprofile = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id).select("-password")
        return res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error);

    }
}


export const getotheruser = async (req, res) => {
    try {
        const { id } = req.params
        const otherusers = await User.find({ _id: { $ne: id } }).select('-password')
        if (!otherusers) {
            return res.status(401).json({
                message: "currently do not have any user"
            })
        }
        return res.status(200).json({
           otherusers
        })
    } catch (error) {
        console.log(error);

    }
}


export const follow = async (req,res)=>{
try {
    
} catch (error) {
    console.log(error);
    
}
}