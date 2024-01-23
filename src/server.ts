import express from 'express';
import { MongoConnection } from './database/mongo-connection';

const server = express();
const port = 3000;
MongoConnection.initialize()

server.get('/', (req, res) => {
    res.send('Hello, world!');
})

server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
})