import AppDataSource from "../../data-source"
import { Client } from "../../entities/clients.entity"
import { Contact } from "../../entities/contacts.entity"

const listContactsService = async (clientId: string): Promise<Contact> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: { id: clientId },
        relations: { contacts: true}
    })

    return client.contacts
}

export default listContactsService