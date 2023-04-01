import { Request, Response } from "express";
import { iContactRequest, iContactUpdate } from "../interfaces/contacts";
import createContactService from "../services/contacts/createContactService";
import getContactService from "../services/contacts/getContactService";
import listContactsService from "../services/contacts/listContactsService";
import removeContactService from "../services/contacts/removeContactService";
import updateContactService from "../services/contacts/updateContactService";

export const createContactController = async (request: Request, response: Response) => {
    const clientId: string = request.client.id
    const contactData: iContactRequest = request.body
    const newContact = await createContactService(contactData, clientId);
    return response.status(201).json(newContact)
}

export const listContactsController = async (request: Request, response: Response) => {
    const clientId: string = request.client.id
    const contacts = await listContactsService(clientId)
    return response.status(200).json(contacts)
}

export const getContactController = async (request: Request, response: Response) => {
    const paramsId: string = request.params.id
    const contact = await getContactService(paramsId)
    return response.status(200).json(contact)
}

export const updateContactController = async (request: Request, response: Response) => {
    const contactData: iContactUpdate = request.body
    const contactId = request.params.id
    const updatedContact = await updateContactService(contactData, contactId);
    return response.status(200).json(updatedContact)
}

export const removeContactController = async (request: Request, response: Response) => {
    const contactId = request.params.id
    await removeContactService(contactId);
    return response.status(204).json({})
}
