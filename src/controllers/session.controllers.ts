import { Request, Response } from "express";
import { iClientLogin } from "../interfaces/clients";
import createSessionService from "../services/session/createSessionService";
import getProfileService from "../services/session/getProfileService";

export const createSessionController = async (request: Request, response: Response) => {
    const loginData: iClientLogin = request.body
    const token = await createSessionService(loginData);
    return response.status(200).json({token})
}

export const getProfileController = async (request: Request, response: Response) => {
    const clientId: string = request.client.id
    const client = await getProfileService(clientId);
    return response.status(200).json(client)
}