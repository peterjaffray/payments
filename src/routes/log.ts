import dotenv from "dotenv";
import express from "express";


const app = express.Router()

dotenv.config()

export 
default 
  app.post("", (req, res) => {
    const body = req.body || {}
    const query = req.query || {}
    console.log("body", body)
    console.log("query", query)  
    res.sendStatus(200)
  })

