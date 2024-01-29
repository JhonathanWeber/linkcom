import { User } from "../models/userModel";

export class UpdateUserDTO {
    name?: string;
    email?: string;
    password?: string;

    constructor(userData?: User) {
        this.name = userData?.name;
        this.email = userData?.email;
        this.password = userData?.password;
    }

}