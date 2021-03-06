import {MongooseDocument} from "mongoose";

declare namespace App {

    interface User {
        email: string;
        hash: string;
        salt: string;
    }

    export type UserDoc = MongooseDocument & User;

}