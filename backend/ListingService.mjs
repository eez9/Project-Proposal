import { ListingModel } from "../models/ListingModel.mjs"

//johnslist : category, title, contact, description, createdBy
const addListing = async (title, category, description, contact) => {
    let ListingDoc = new ListingModel({
        category: category,
        title: title,
        contact: contact,
        description: description,
    })

    const result = await ListingDoc.save()

    console.log("added Listing to DB", result)
}

const getCategoryListing = async (catToSearch) => {
    const data = await ListingModel.find({category: catToSearch}).populate("createdBy")

    return data
}

const getAllListing = async () => {
    const data = await ListingModel.find()

    return data
}

export {addListing, getCategoryListing, getAllListing}