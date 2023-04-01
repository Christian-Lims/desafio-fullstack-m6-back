import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"


const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {

    let token = request.headers.authorization

    if(!token){
        return response.status(401).json({
            message: "invalid token"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if(error){
            return response.status(401).json(error)
        }

        request.client = {
            id: decoded.sub as string
        }

        return next()
    })
}

export default authMiddleware