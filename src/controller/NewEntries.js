import db from "../config/database.js";
import dayjs from "dayjs";
import { entrieSchema } from "../model/EntrieSchema.js";


export async function listEntries(req, res) {
    const { authorization } = req.headers
    const token = authorization;
    try {
      const entrieData = await db.collection("entries").find({ user:  token  }).toArray()
      return res.send(entrieData)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

export async function addEntrie(req, res){
    const entrie = req.body;
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')
    if (!token) return res.status(422).send("Informe o token!")
    const {value, description, exit} = req.body
    const date = Date.now()
    const timestamp = dayjs(date).format("DD/MM")
    let realValue, revValue = value
    
    const validation = entrieSchema.validate(entrie, { pick: ["value", "description", "exit"], abortEarly: false })
    
    if(typeof value != "number"){
        revValue = parseFloat(revValue)
    }

    if(exit===false){     
        realValue = -revValue 
        return res.status(422).send("Você deve enviar um valor de entrada")
    } 
    else{
        
        realValue=revValue
    }

    
    if(validation.error){
        const errors = validation.error.details.map((err) => {
            return err.message
          })
          return res.status(422).send(errors)
    }

    try {
        const checkSession = await db.collection("sessoes").findOne({ token })

        if (!checkSession) return res.status(401).send("Usuário não está logado. Faça o login e tente novamente.")

        
        await db.collection("entries").insertOne({ user: token, value: realValue, description: description, date: timestamp  })
        res.sendStatus(200)
        
      } catch (error) {
        res.status(500).send(error.message)
      }
}

export async function addExit(req, res){
    const entrie = req.body;
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')
    if (!token) return res.status(422).send("Informe o token!")
    const {value, description, exit} = req.body
    const date = Date.now()
    const timestamp = dayjs(date).format("DD/MM")
    let realValue

    if(exit===false){
         
        realValue = -value } 
    else{
        return res.status(422).send("Você deve enviar um valor de saida")
        realValue=value
    }

    const validation = entrieSchema.validate(entrie, { pick: ["value", "description", "exit"], abortEarly: false })
    
    if(validation.error){
        const errors = validation.error.details.map((err) => {
            return err.message
          })
          return res.status(422).send(errors)
    }

    try {
        const checkSession = await db.collection("sessoes").findOne({ token })

        if (!checkSession) return res.status(401).send("Usuário não está logado. Faça o login e tente novamente.")

        
        await db.collection("entries").insertOne({ user: token, value: realValue, description: description, date: timestamp  })
        res.sendStatus(200)
        
      } catch (error) {
        res.status(500).send(error.message)
      }
}