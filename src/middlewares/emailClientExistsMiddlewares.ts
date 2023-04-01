import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../errors/appError";

const emailClientExistsMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    
    const clientRepository = AppDataSource.getRepository(Client)

    if(request.body.email){
        const client = await clientRepository.findOneBy({
            email: request.body.email
        })
    
        if(client){
            throw new AppError(`Email '${request.body.email}' already exists `, 409)
        }
    }

    return next()
}

export default emailClientExistsMiddlewares