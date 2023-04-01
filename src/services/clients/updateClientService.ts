import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { iClient, iClientUpdate } from "../../interfaces/clients"
import { returnClientSerializer } from "../../serializers/clients.serizalizers"

const updateClientService = async (clientData: iClientUpdate, clientId: string): Promise<iClient> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOne({
        where: {
            id: clientId
        },
        withDeleted: true
    })

    const updatedClient = clientRepository.create({
        ...findClient,
        ...clientData
    })
    await clientRepository.save(updatedClient)

    const returnUpdatedClient = await returnClientSerializer.validate(updatedClient, {
        stripUnknown: true
    })

    return returnUpdatedClient
}

export default updateClientService