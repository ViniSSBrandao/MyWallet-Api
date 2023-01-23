import db from "../config/database.js";
import { entrieSchema } from "../model/EntrieSchema.js";

export async function addEntrie(req, res){
    console.log ("jooj")
    const {user, value, description} = req.body;
    
    try {
        await db.collection("joj").insertOne({ user: user, value: value, description: description  })
        res.status(201).send("Usuário cadastrado com sucesso!")
    
      } catch (error) {
        res.status(500).send(error.message)
      }
}

