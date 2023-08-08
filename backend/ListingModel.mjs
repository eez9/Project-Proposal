//johnslist : category, title, contact, description, createdBy
import mongoose from "mongoose";

const ListingSchema = mongoose.Schema({
    title: String,
    category: String,
    description: String,
    contact: String
})

const ListingModel = mongoose.model("listing", ListingSchema)

export {ListingModel}