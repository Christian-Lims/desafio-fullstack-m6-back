import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { iClientLogin } from "../../interfaces/clients";
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs";
import "dotenv/config"
import { AppError } from "../../errors/appError";

const createSessionService = async ({ email, password }:iClientLogin): Promise<string> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {email: email}
    })

    if(!client.isActive){
        throw new AppError("Disabled client", 400)
    }

    if(!client){
        throw new AppError("Email or password invalid", 403)
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch){
        throw new AppError("Email or password invalid", 403)
    }

    const token = jwt.sign({}, process.env.SECRET_KEY, {
            subject: String(client.id),
            expiresIn: "24h"
        }
    )

    return token
}

export default createSessionService