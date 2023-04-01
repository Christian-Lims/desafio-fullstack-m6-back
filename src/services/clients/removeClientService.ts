import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { AppError } from "../../errors/appError"

const removeClientService = async (clientId: string) => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({id: clientId})

    if(!client){
        throw new AppError("Client not found!", 404)
    }
    await clientRepository.save({...client, isActive: false})

}

export default removeClientService