import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import router from './routes/index';
//const dev_env_boolean = () => (process.env.NODE_ENV != "production") 
dotenv.config()

createConnection()
.then(async _connection => {
    const app = express()
    app.use(express.json())    
    .use(router)
    .all('*', (_req, res) => {
      res.sendStatus(404)
    })
    .listen(9933, () => console.log(`Payments Port 9933`))
  })
  .catch(error => console.log("TypeORM connection error: ", error));

