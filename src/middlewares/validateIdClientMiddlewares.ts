import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../errors/appError";
import { validate } from "uuid";

const validateIdClientMiddlewares = async (request: Request, response: Response, next: NextFunction) => {
    
    const clientRepository = AppDataSource.getRepository(Client)
    const validateId = validate(request.params.id)

    if(!validateId) {
        throw new AppError("Uuid invalid format", 400)
    }

    const client = await clientRepository.findOne({
        where: {id: request.params.id}
    })

    if(!client){
        throw new AppError("Invalid ID", 404)
    }

    return next()
}

export default validateIdClientMiddlewares