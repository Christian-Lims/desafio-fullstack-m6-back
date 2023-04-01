import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../errors/appError";

const isOwnerMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client)

    if(request.params.id !== request.client.id){
        throw new AppError(`No permission`, 401)
    }

    const client = await clientRepository.findOne({
        where: {
            id: request.params.id
        },
        withDeleted: true
    })
    

    if(!client){
        throw new AppError("Invalid ID", 404)
    }

    return next()
}

export default isOwnerMiddlewares