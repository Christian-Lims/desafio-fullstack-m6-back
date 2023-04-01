import * as yup from "yup"
import { SchemaOf } from "yup"
import { iClient } from "../interfaces/clients"
import { iContact, iContactRequest, iContactUpdate } from "../interfaces/contacts"
import { returnClientSerializer } from "./clients.serizalizers"


export const contactSerializer: SchemaOf<iContactRequest> = yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    phone_number: yup.string().required()
})

export const returnContactSerializer: SchemaOf<iContact> = yup.object().shape({
    id: yup.string(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone_number: yup.string(),
    client: returnClientSerializer,
    createdAt: yup.date()
})

export const updateContactSerializer: SchemaOf<iContactUpdate> = yup.object().shape({
    full_name: yup.string(),
    email: yup.string().email(),
    phone_number: yup.string()
})