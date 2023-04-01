import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { iClient, iClientRequest } from "../../interfaces/clients"
import { returnClientSerializer } from "../../serializers/clients.serizalizers"


const createClientService = async (clientData: iClientRequest): Promise<iClient> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = clientRepository.create(clientData)
    await clientRepository.save(client)

    const returnClient = await returnClientSerializer.validate(client , {
        stripUnknown:true
    })

    return returnClient
}

export default createClientService