import express from "express"
import contact from './contact'
import easypay from './easypay'
import invoices from './invoices'
import log from './log'

const router = express.Router()

export default router
 .use('/easypay/contact/', contact)
 .use('/easypay/invoice/', invoices)
 .use('/easypay/', easypay)
 .use('/log/', log)
 .get('/favicon.ico', (_req, res) => res.sendStatus(204))
 .all('easypay', (_req, res) => res.sendStatus(405))