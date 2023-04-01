import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { AppError } from "../errors/appError";

const emailContactExistsMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    
    const contactRepository = AppDataSource.getRepository(Contact)

    if(request.body.email){
        const contact = await contactRepository.findOneBy({
            email: request.body.email,
            client: request.client
        })
    
        if(contact){
            throw new AppError(`Email '${request.body.email}' already exists in your list`, 409)
        }
    }

    return next()
}

export default emailContactExistsMiddlewares