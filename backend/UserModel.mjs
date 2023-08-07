import mongoose from "mongoose";
import validator from "validator";

//schema  -> structure of document
//model -> schema

//structure: name, email, age
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: {
        type: String,
        validate: (value)=>{
            return validator.isEmail(value)
        }
    }
})

const UserModel = mongoose.model("users", userSchema)

export { UserModel }