import jwt from "jsonwebtoken";

const protectRoute = (req, res , next)=>{
    try {
        const token = req.cookie.jwt;
        if(!token){
            res.status(401).json({error:"Unauthorized - No token provided"})
        }
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({message:"Internal server error."});
    }
}

