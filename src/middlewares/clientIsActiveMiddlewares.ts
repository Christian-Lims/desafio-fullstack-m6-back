import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../errors/appError";

const clientIsActiveMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {id: request.params.id}
    })

    if(!client.isActive){
        throw new AppError("Disabled client", 400)
    }

    return next()
}

export default clientIsActiveMiddlewares