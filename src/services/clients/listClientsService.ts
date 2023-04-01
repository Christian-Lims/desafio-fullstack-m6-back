import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { iClient } from "../../interfaces/clients"
import { listClientsSerializer } from "../../serializers/clients.serizalizers"

const listClientsService = async (): Promise<Array<iClient>> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find({ 
        where: { isActive: true }
    })

    const returnListClients = await listClientsSerializer.validate(clients, {
        stripUnknown: true
    })
    
    return returnListClients
}

export default listClientsService