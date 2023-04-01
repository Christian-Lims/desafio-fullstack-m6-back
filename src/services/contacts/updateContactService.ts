import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { iContact, iContactUpdate } from "../../interfaces/contacts"
import { returnContactSerializer } from "../../serializers/contacts.serizalizers"

const updateContactService = async (contactData: iContactUpdate, contactId: string): Promise<iContact> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    const updatedContact = contactRepository.create({
        ...findContact,
        ...contactData
    })
    await contactRepository.save(updatedContact)

    const returnUpdatedContact = await returnContactSerializer.validate(updatedContact, {
        stripUnknown: true
    })

    return returnUpdatedContact
}

export default updateContactService