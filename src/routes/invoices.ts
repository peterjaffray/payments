import dotenv from "dotenv";
import express from "express";


const app = express.Router()

dotenv.config()

export 
default   
  app.all('/:id/', (req, res) => {
    const body = req.body || {}
    const query = req.query || {}
    const params = req.params || {}
    console.log("invoice")
    console.log("body", body)
    console.log("query", query)  
    console.log("params", params)
    res.sendStatus(200)

  })




