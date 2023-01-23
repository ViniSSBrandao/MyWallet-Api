import { addEntrie } from '../controller/NewEntries.js'
import { Router } from 'express'

const entrieRouter = Router()


entrieRouter.post("/novaentrada", addEntrie)


export default entrieRouter