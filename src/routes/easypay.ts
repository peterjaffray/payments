import dotenv from "dotenv";
import express from "express";


const app = express.Router()

dotenv.config()

export 
default 
  app.all("/", (req, res) => {
    const body = req.body || {}
    const query = req.query || {}    
    console.log("easypay")
    console.log("body", body)
    console.log("query", query)  
    //console.log(req)
    res.sendStatus(202)
  })

