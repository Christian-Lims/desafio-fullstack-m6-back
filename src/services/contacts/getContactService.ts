import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { iContact } from "../../interfaces/contacts"
import { returnContactSerializer } from "../../serializers/contacts.serizalizers"

const getContactService = async (paramsId: string): Promise<iContact> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOne({
        where: { id: paramsId },
        relations: { client: true }
    })

    const returnContact = await returnContactSerializer.validate(contact , {
        stripUnknown:true
    })

    return returnContact
}

export default getContactService