import { Tweet } from "../models/tweetschema.js";

export const createtweet  = async (req,res)=>{
    try {
        const {description ,id} = req.body
        if (!description || !id) {
            return res.status(401).json({
                message:"Fields are required",
                success:false
            })
        }
        await Tweet.create({
            description,
            userId:id
        })
        return res.status(201).json({
            message:"Tweet created successfully",
            success:true

        })
    } catch (error) {
        console.log(error);
        
    }
}


export const deletetweet = async (req ,res)=>{
    try {
        const {id} = req.params
        await Tweet.findByIdAndDelete(id)
        return res.status(200).json({
            message:"Tweet deleted successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}


export const likeordislike = async (req,res)=>{
try {
    const loggedinuserid = req.body.id
    const tweetid = req.params.id
    const tweet = await  Tweet.findById(tweetid)
    if (tweet.like.includes(loggedinuserid)) {
        // dislike
        await Tweet.findByIdAndUpdate(tweetid, {$pull:{like:loggedinuserid}})
        return res.status(200).json({
            message:"User dislike your tweet"
        })
    }else{
        // like
        await Tweet.findByIdAndUpdate(tweetid, {$push:{like:loggedinuserid}})
        return res.status(200).json({
            message:"User like your tweet"
        })
    }
} catch (error) {
    console.log(error);
    
}
}




