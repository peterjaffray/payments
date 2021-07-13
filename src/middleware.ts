import express from "express"

const app = express.Router()

export default app.all('*', function (req, res, next) {   
  //console.log(req.params)
  next() 
})