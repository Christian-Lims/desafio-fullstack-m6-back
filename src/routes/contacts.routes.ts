import { Router } from "express";
import { createContactController, getContactController, listContactsController, removeContactController, updateContactController } from "../controllers/contacts.controllers";
import authMiddleware from "../middlewares/authMiddlewares";
import emailContactExistsMiddlewares from "../middlewares/emailContactExistsMiddlewares";
import isOwnerContactMiddlewares from "../middlewares/isOwnerContactMiddlewares";
import validateDataMiddleware from "../middlewares/validateData.Middleware";
import validateIdContactMiddlewares from "../middlewares/validateIdContactMiddlewares";
import { contactSerializer, updateContactSerializer } from "../serializers/contacts.serizalizers";


const contactsRoutes = Router()

contactsRoutes.post("",authMiddleware, validateDataMiddleware(contactSerializer), emailContactExistsMiddlewares, createContactController)
contactsRoutes.get("", authMiddleware, listContactsController)
contactsRoutes.get("/:id", authMiddleware, validateIdContactMiddlewares, isOwnerContactMiddlewares, getContactController)
contactsRoutes.patch("/:id", authMiddleware, validateIdContactMiddlewares, isOwnerContactMiddlewares, validateDataMiddleware(updateContactSerializer), emailContactExistsMiddlewares, updateContactController)
contactsRoutes.delete("/:id", authMiddleware, validateIdContactMiddlewares, isOwnerContactMiddlewares, removeContactController)

export default contactsRoutes
