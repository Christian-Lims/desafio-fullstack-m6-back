import { Router } from "express";
import { createClientController, listClientsController, removeClientController, updateClientController } from "../controllers/clients.controllers";
import authMiddleware from "../middlewares/authMiddlewares";
import clientIsActiveMiddlewares from "../middlewares/clientIsActiveMiddlewares";
import emailClientExistsMiddlewares from "../middlewares/emailClientExistsMiddlewares";
import isOwnerMiddlewares from "../middlewares/isOwnerMiddlewares";
import validateClientUpdateMiddleware from "../middlewares/validateClientUpdateMiddleware";
import validateDataMiddleware from "../middlewares/validateData.Middleware";
import validateIdClientMiddlewares from "../middlewares/validateIdClientMiddlewares";
import { clientSerializer, updateClientSerializer } from "../serializers/clients.serizalizers";

const clientsRoutes = Router()

clientsRoutes.post("",validateDataMiddleware(clientSerializer), emailClientExistsMiddlewares, createClientController)
clientsRoutes.get("",authMiddleware, listClientsController)
clientsRoutes.patch("/:id", authMiddleware, validateClientUpdateMiddleware, validateIdClientMiddlewares, clientIsActiveMiddlewares, isOwnerMiddlewares, validateDataMiddleware(updateClientSerializer), emailClientExistsMiddlewares, updateClientController)
clientsRoutes.delete("/:id",authMiddleware, validateIdClientMiddlewares, clientIsActiveMiddlewares, isOwnerMiddlewares, removeClientController)

export default clientsRoutes
