import express from "express"
import easypay from './easypay'

const router = express.Router()

router.use('/easypay*', easypay)
router.get('/favicon.ico', (_req, res) => res.sendStatus(204))
router.all('', (_req, res) => res.sendStatus(405))

export default router