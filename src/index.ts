import dotenv from "dotenv"
import express from "express"
import logger from 'morgan'
import middleware from './middleware'
import router from './routes/index'


const isProduction = process.env.NODE_ENV === 'production';

dotenv.config()
const port = process.env.PORT || 3200
const app = express()

app.set('trust proxy', 1)
app.use(logger('dev'))
app.use(express.json())
     
  .use(express.urlencoded({extended: true}))
  .use(middleware)
  .use(router)
  .all('*', (req, res) => {
    res.sendStatus(404)
  })
 
app.listen(port, () => console.log(`Port ${port}`))