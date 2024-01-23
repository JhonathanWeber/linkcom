import { Mongoose } from "mongoose";
import "dotenv/config";

const db = new Mongoose()

export class MongoConnection {

    static async initialize() {
        // console.log(process.env.MONGO_URL);
        try {
            db.connection.on('connected', () => console.log('Connected to MongoDB Cloud - Atlas!'));
            db.connection.on('open', () => console.log('Open connection to MongoDB Cloud - Atlas!'));
            db.connection.on('disconnected', () => console.log('disconnected from MongoDB Cloud - Atlas!'));
            db.connection.on('reconnected', () => console.log('Reconnected from MongoDB Cloud - Atlas!'));
            db.connection.on('disconnecting', () => console.log('Disconnecting from MongoDB Cloud - Atlas!'));
            db.connection.on('close', () => console.log('Closed connection to MongoDB Cloud - Atlas!'));

            await db.connect(process.env.MONGO_URL as string, {
                serverSelectionTimeoutMS: 5000,
            })
        } catch (error) {
            console.log(`Connection Database Error: ${error}`)

        }
    }

    static finish() {
        try {
            db.connection.close()
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
}