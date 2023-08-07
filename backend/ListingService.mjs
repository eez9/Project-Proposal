import { ListingModel } from "../models/ListingModel.mjs"

//johnslist : category, title, contact, description, createdBy
const addListing = async (category, title, contact, description, createdByID) => {
    let ListingDoc = new ListingModel({
        category: category,
        title: title,
        contact: contact,
        description: description,
        createdBy: createdByID,
    })

    const result = await ListingDoc.save()

    console.log("added Listing to DB", result)
}

const getCategoryListing = async (catToSearch) => {
    const data = await ListingModel.find({category: catToSearch}).populate("createdBy")

    return data
}

export {addListing, getCategoryListing}