import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleError from "./errors/handleError"
import sessionRoutes from "./routes/session.routes"
import clientsRoutes from "./routes/clients.routes"
import contactsRoutes from "./routes/contacts.routes"
import cors from "cors"
import profileRoutes from "./routes/profile.routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"


const app = express()
app.use(express.json())
app.use(cors())


app.use("/login", sessionRoutes)
app.use("/profile", profileRoutes)
app.use("/clients", clientsRoutes)
app.use("/contacts", contactsRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(handleError)

export default app