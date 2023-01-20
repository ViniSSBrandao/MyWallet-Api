import express from "express"
import cors from "cors"
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import joi from "joi";


dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
const mongoClient = new MongoClient(process.env.DATABASE_URL)
console.log(process.env.DATABASE_URL)
let db;

const PORT = 5000;
app.listen(PORT, ()=>{console.log("Api connected")})