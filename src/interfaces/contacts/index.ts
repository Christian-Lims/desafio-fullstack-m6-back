import { iClient } from "../clients"

export interface iContactRequest {
    full_name: string
    email: string
    phone_number: string
}

export interface iContact {
    id: string
    full_name: string
    email: string
    phone_number: string
    client: iClient
    createdAt: Date
}

export interface iContactUpdate {
    full_name?: string
    email?: string
    phone_number?: string
}
