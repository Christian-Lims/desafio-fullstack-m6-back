import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { validate } from "uuid";
import { Contact } from "../entities/contacts.entity";

const validateIdContactMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    
    const contactRepository = AppDataSource.getRepository(Contact)
    const validateId = validate(request.params.id)

    if(!validateId) {
        throw new AppError("Uuid invalid format", 400)
    }

    const contact = await contactRepository.findOne({
        where: {id: request.params.id}
    })

    if(!contact){
        throw new AppError("Invalid ID", 404)
    }

    return next()
}

export default validateIdContactMiddlewares