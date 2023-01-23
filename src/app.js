import express from "express"
import cors from "cors"
import authRouter from "./routers/AuthRoutes.js"
import entrieRouter from "./routers/EntrieRoutes.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use([authRouter, entrieRouter])


// app.post("/valor", async (req, res) => {
//     const date = Date.now()
//     const timestamp = dayjs(date).format("DD/MM")
//     try{
//             const { value, description, user } = req.body 
//             const valueSchema = joi.object({
//             value: joi.string().required(),
//             description: joi.string().required(),
//             user: joi.string().required()
//         });
    
//         const validation = valueSchema.validate(
//             { value, description, user },
//             { abortEarly: false }
//         );
    
//         if(validation.error){
//             const err = validation.error.details.map((detail) => detail.map)
//             return res.send(err)
//         }
//         const valor = await db.collection("participants").insertOne({name:"jorge"}) 

//         return res.sendStatus(201)
//     }
//     catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// })

// app.get("/valor", async (req, res) => {
    
//     try{
//         const userIsLogged = await db.collection("participants").findOne({name:"jorge"})
//         return res.send(userIsLogged)
//     }
//     catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// })

const PORT = 5000;
app.listen(PORT, ()=>{console.log("Listening on 5000")})