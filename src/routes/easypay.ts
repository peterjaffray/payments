import express from "express";
import { getConnection } from "typeorm";
import { CreditCard } from "../entity/CreditCard";
const router = express.Router()

export default router.post("/", async (req, res) => {
  const body = req.body || {}
  console.log("easypay_post")
  console.log("body", body)
  const connection = getConnection()
  const repository = connection.getRepository(CreditCard);

  const record = new CreditCard()
  Object.assign(record, req.body)

       
  await repository.save(record)
  .then(record => {
    res.send('credit card '+ record.id).status(200)
    console.log('credit card', record.id)
    })
  .catch(e => res.send(e).status(500))  
})