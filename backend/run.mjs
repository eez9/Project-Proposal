import "./connect.mjs"
import express from "express";
import { addUser } from "./src/services/UserService.mjs";
import { addListing, getCategoryListing } from "./src/services/ListingService.mjs";
import { UserModel } from "./src/models/UserModel.mjs";
import cors from 'cors'
import mongoose from "mongoose";

//johnslist : category, title, contact, description, createdBy
//Users : name, username, password, email

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await users.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/Register",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email: email,
        password: password
    }

    try{
        const check = await users.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await users.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

//addUser
//method: POST
//req - body, resp - 200
app.post("/addUser", async function(request, response) {
    let {name, username, password, email} = request.body

    await addUser(name, username, password, email)

    response.status(200).send({message: "Success"})
})

//addListing
//method: POST
//req - body, resp - 200
app.post("/addListing", async function(request, response) {
    let {category, title, contact, description, createdByID} = request.body

    await addListing(category, title, contact, description, createdByID)

    response.status(200).send({message: "Success"})
})

//getCategoryListing
//method: GET
//req - X, resp - 200
app.get("/getCategoryListing", async function(request, response) {
    let data = await getCategoryListing("cars")

    response.status(200).send(data)
})

let PORT = 1234;

app.listen(PORT, function(){
    console.log("API running at port: ", PORT)
})