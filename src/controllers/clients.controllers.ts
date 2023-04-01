import { Request, Response } from "express";
import { iClientRequest, iClientUpdate } from "../interfaces/clients"
import createClientService from "../services/clients/createClientService";
import listClientsService from "../services/clients/listClientsService";
import removeClientService from "../services/clients/removeClientService";
import updateClientService from "../services/clients/updateClientService";

export const createClientController = async (request: Request, response: Response) => {
    const clientData: iClientRequest = request.body
    const newClient = await createClientService(clientData);
    return response.status(201).json(newClient)
}

export const listClientsController = async (request: Request, response: Response) => {
    const clients = await listClientsService()
    return response.status(200).json(clients)
 }

export const updateClientController = async (request: Request, response: Response) => {
    const clientData: iClientUpdate = request.body
    const clientId = request.params.id
    const updatedClient = await updateClientService(clientData, clientId);
    return response.status(200).json(updatedClient)
}

export const removeClientController = async (request: Request, response: Response) => {
    const clientId = request.params.id
    await removeClientService(clientId);
    return response.status(204).json({})
}
