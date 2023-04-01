import { iContact } from "../contacts"

export interface iClientRequest {
    full_name: string
    email: string
    password: string
    phone_number: string
}

export interface iClient {
    id: string
    full_name: string
    email: string
    phone_number: string
    isActive: boolean
    createdAt: Date
}

export interface iProfile {
    id: string
    full_name: string
    email: string
    phone_number: string
    isActive: boolean
    createdAt: Date
    contacts?: iContact[]
}

export interface iClientLogin {
    email: string
    password: string
}

export interface iClientUpdate {
    full_name?: string
    email?: string
    password?: string
    phone_number?: string
}