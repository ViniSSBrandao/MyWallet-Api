import express from "express"
import cors from "cors"
import authRouter from "./routers/AuthRoutes.js"
import entrieRouter from "./routers/EntrieRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use([authRouter, entrieRouter])

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})