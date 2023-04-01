import { Request, Response, NextFunction } from "express"
import { AnySchema } from "yup"
import { AppError } from "../errors/appError"

const validateDataMiddleware = (schema: AnySchema) => async(request: Request, response: Response, next: NextFunction ) => {

    try {
        const validateData = await schema.validate(request.body, {
            abortEarly: false,
            stripUnknown: true
        })

        request.body = validateData
        return next()
        
    } catch (error) {
        throw new AppError(error.message, 400)
    }
}

export default validateDataMiddleware