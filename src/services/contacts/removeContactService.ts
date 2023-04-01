import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"

const removeContactService = async (contactId: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({id: contactId})

    await contactRepository.remove(contact)
}

export default removeContactService