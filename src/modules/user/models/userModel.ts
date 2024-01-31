import mongoose, { InferSchemaType, Schema, Model, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
    },
    password: {
        type: "string",
        required: true,
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true,
}
)

export type User = InferSchemaType<typeof userSchema>

export const UserModel: Model<User> = model('User', userSchema)