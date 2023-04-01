import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { iProfile } from "../../interfaces/clients"
import { returnProfileSerializer } from "../../serializers/clients.serizalizers"


const getProfileService = async (clientId: string): Promise<iProfile> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: { id: clientId },
        relations: { contacts: true}
    })

    const returnClient = await returnProfileSerializer.validate(client , {
        stripUnknown:true
    })

    return returnClient
}

export default getProfileService