import mongoose from "mongoose";
import validator from "validator";

//schema  -> structure of document
//model -> schema

//structure: name, email, age
const userSchema = mongoose.Schema({
    email: {
        type: String,
        validate: (value)=>{
            return validator.isEmail(value)
        }
    },
    password: String,
})

const UserModel = mongoose.model("users", userSchema)

export { UserModel }