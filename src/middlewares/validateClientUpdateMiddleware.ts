import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";


const validateClientUpdateMiddleware = async (request: Request, response: Response, next: NextFunction) => {

    const bodyData = request.body
    
    if(Object.keys(bodyData).includes("isActive") || Object.keys(bodyData).includes("id")){
        throw new AppError("Unable to update these fields", 401)
    }

    return next()
}

export default validateClientUpdateMiddleware