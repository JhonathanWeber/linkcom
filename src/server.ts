import express from 'express';
import { MongoConnection } from './database/mongo-connection';
import { router } from './routes/routes';
import dotenv from 'dotenv'

dotenv.config()

MongoConnection.initialize()

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json())
server.use(router)

server.listen(port, () => console.log(`server listening on port ${port}`))