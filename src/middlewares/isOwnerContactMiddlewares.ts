import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { Contact } from "../entities/contacts.entity";
import { AppError } from "../errors/appError";

const isOwnerContactMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const client = await clientRepository.findOne({
        where: {
            id: request.client.id
        }
    })

    const contact = await contactRepository.findOne({
        where: {
            id: request.params.id
        },
        relations: { client: true}
    })

   
    if(contact.client.id !== client.id){
        throw new AppError(`No permission`, 401)
    }

    return next()
 
}

export default isOwnerContactMiddlewares