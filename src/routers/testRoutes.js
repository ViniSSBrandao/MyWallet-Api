import { Router } from "express";
import { test } from "../test/test.js";

const testRouter = Router()

testRouter.post("/participants", test)


export default testRouter