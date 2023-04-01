import * as yup from "yup"
import { SchemaOf } from "yup"
import { iClient, iClientRequest, iClientUpdate, iProfile } from "../interfaces/clients"
import {returnContactSerializer} from "./contacts.serizalizers"

export const clientSerializer: SchemaOf<iClientRequest> = yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone_number: yup.string().required()
})

export const returnClientSerializer: SchemaOf<iClient> = yup.object().shape({
    id: yup.string(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone_number: yup.string(),
    isActive: yup.boolean(),
    createdAt: yup.date()
    
})

export const listClientsSerializer: SchemaOf<iClient[]> = yup.array(returnClientSerializer)

export const updateClientSerializer: SchemaOf<iClientUpdate> = yup.object().shape({
    full_name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    phone_number: yup.string()
})


export const returnProfileSerializer: SchemaOf<iProfile> = yup.object().shape({
    id: yup.string(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone_number: yup.string(),
    isActive: yup.boolean(),
    createdAt: yup.date(),
    contacts: yup.array()
})