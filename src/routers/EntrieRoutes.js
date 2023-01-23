import { addEntrie, listEntries } from '../controller/NewEntries.js'
import { Router } from 'express'

const entrieRouter = Router()


entrieRouter.post("/novaentrada", addEntrie)
entrieRouter.get("/novaentrada", listEntries)


export default entrieRouter