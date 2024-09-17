import express from "express"
import { CreateAPI, DeleteAPI, ReadAPI, UpdateAPI,  } from "../controller/api.controller.js"


const APIRouter = express.Router({
    caseSensitive:true,
    strict:true
})

APIRouter.post("/create_api",CreateAPI)
APIRouter.post("/read_api",ReadAPI)
APIRouter.post("/update_api",UpdateAPI)
APIRouter.post("/delete_api",DeleteAPI)



export default APIRouter