import { Client } from "../../entities/clients.entity"
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { iContact, iContactRequest } from "../../interfaces/contacts"
import { returnContactSerializer } from "../../serializers/contacts.serizalizers"

const createContactService = async (contactData: iContactRequest, clientId: string): Promise<iContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: { id: clientId }
        })
    
    const contact = contactRepository.create({
        ...contactData,
        client: client
    })

    await contactRepository.save(contact)

    const returnContact = await returnContactSerializer.validate(contact , {
        stripUnknown:true
    })

    return returnContact
}

export default createContactService

