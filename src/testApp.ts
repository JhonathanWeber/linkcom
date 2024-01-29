import { Mongoose, version } from 'mongoose';

const mongoose = new Mongoose()


async function run() {

    try {
        await mongoose.connect('mongodb+srv://jhonmw:2g5S3vLqYIBzXVkz@linkcom.refc9jb.mongodb.net/?retryWrites=true&w=majority', {
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true
            },
            dbName: 'jhon'
        });
        await mongoose.connection.db.admin().command({ ping: 1 })
        // await mongoose.connection.db.createCollection('Users2')
        // await mongoose.connection.db.databaseName('Users')
        console.log("Connection established")

    } finally {
        // await mongoose.disconnect();
    }
}


const UserSchema = new mongoose.Schema({ name: String, email: String })


const User = mongoose.model('Users', UserSchema)

const newUser = new User({
    name: 'Jhon',
    email: 'jhonm@mail.com'
})

const connectDBandSavedUser = async () => {
    await newUser.save()
}

run().catch(console.dir)

connectDBandSavedUser()