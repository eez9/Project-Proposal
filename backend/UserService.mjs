import { UserModel } from "../models/UserModel.mjs"

const addUser = async (name, username, password, email) => {
    let userDoc = new UserModel({
        name: name,
        username: username,
        password: password,
        email: email
    })

    const result = await userDoc.save();

    console.log("add user to DB", result)
}

export {addUser}