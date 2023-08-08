import "./connect.mjs"
import express from "express";
import { addUser } from "./src/services/UserService.mjs";
import { addListing, getAllListing, getCategoryListing } from "./src/services/ListingService.mjs";
import { UserModel } from "./src/models/UserModel.mjs";
import cors from 'cors'
import mongoose from "mongoose";
import users from "./connect.mjs"
import { ListingModel } from "./src/models/ListingModel.mjs";

//johnslist : category, title, contact, description, createdBy
//Users : name, username, password, email

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    let {email, password}=req.body

    try{
        const check= await UserModel.findOne({email:email, password:password})

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
    let {email, password} = req.body

    const userData = new UserModel({
        email: email,
        password: password
    })

    try {
        const check = await UserModel.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await userData.save();
        }
    } catch(err) {
        console.log(err)
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

app.post('/CreateListing', async(req, res) => {
    let {title, category, description, contact} = req.body

    const listingData = new ListingModel({
        title: title,
        category: category,
        description: description,
        contact: contact
    })

    try {
        await listingData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

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

app.get("/MyListing", async function(request, response) {
    let data = await getAllListing()

    response.status(200).send(data)
})

let PORT = 8000;

app.listen(PORT, function(){
    console.log("API running at port: ", PORT)
})